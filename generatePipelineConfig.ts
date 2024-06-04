import * as fs from 'fs/promises';
import * as path from 'path';

function generateParallelSteps(shards: number, indent: string): string {
  let steps = '';
  for (let i = 1; i <= shards; i++) {
    steps += `
${indent}  - step:
${indent}      runs-on:
${indent}        - self.hosted
${indent}        - linux.shell
${indent}        - gpu
${indent}        - shard
${indent}      name: ${i}/${shards} shard
${indent}      caches:
${indent}        - node
${indent}        - playwright
${indent}      script:
${indent}        - npm ci
${indent}        - npx playwright install chromium
${indent}        - npx playwright test --shard=${i}/${shards} --grep-invert="setup" | tee ${i}_run_logs_dirty.txt;
${indent}        - sed "s/\\x1b\\[[0-9;]*[a-zA-Z]//g" ${i}_run_logs_dirty.txt > ${i}_run_logs.txt
${indent}      artifacts:
${indent}        - allure-results/*
${indent}        - ${i}_run_logs.txt${i != shards ? '\n' : ''}`;
  }
  return steps;
}

async function generatePipelineConfig( numSteps: number): Promise<void> {
  try {
    const template = await fs.readFile('bitbucket-pipelines.yml.template', 'utf8');

    const pipelineConfig = template.replace(/( *)#- parallel:/, (_, indent) => {
      return `${indent}- parallel:${generateParallelSteps(numSteps, indent)}`;
    });

    await fs.writeFile(path.join(__dirname, 'bitbucket-pipelines.yml'), pipelineConfig, 'utf8');

    console.log(`Bitbucket pipeline config generated.`);
  } catch (error) {
    console.error('Error modifying template file:', error);
  }
}

const shards = parseInt(process.argv[2]);

if (process.argv.length < 3) {
  console.log(`Usage: ts-node ${path.basename(process.argv[1])} [number of shards]`);
  process.exit(1);
}

if (isNaN(shards) || shards <= 0) {
  console.error('Please provide a valid number of shards.');
  process.exit(1);
}

generatePipelineConfig(shards);