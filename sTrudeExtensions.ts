import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const folderName = 'snaptrude-extensions';
const repoUrls = [
  'https://bitbucket.org/snaptrude/playwright-vscode.git',
  'https://bitbucket.org/snaptrude/playwright-codegen.git'
];
const cloneRepos = () => {
  try {
    repoUrls.forEach(url => {
      execSync(`git clone ${url}`, { stdio: 'inherit' });
    });
  } catch (error) {
    console.error('Error cloning repositories:', error);
    process.exit(1);
  }
};

const updateRepos = () => {
  const repos = ['playwright-vscode', 'playwright-codegen'];
  const repoParentFolder = process.cwd();

  repos.forEach(repo => {
    const repoPath = path.join(repoParentFolder, repo);
    process.chdir(repoPath);
    try {
      execSync('git pull origin snaptrude', { stdio: 'inherit' });
    } catch (error) {
      console.error(`Error updating ${repo} repository:`, error);
      process.exit(1);
    }
  });

  process.chdir(repoParentFolder);
};

const buildProjects = () => {
  const repoParentFolder = process.cwd();
  process.chdir(path.join(repoParentFolder, 'playwright-vscode'));
  try {
    execSync('npm ci', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
    execSync('npm run package', { stdio: 'inherit' });

    const vsixFile = fs.readdirSync('.').find(file => file.endsWith('.vsix'));
    if (vsixFile) {
      fs.copyFileSync(vsixFile, path.join(process.cwd(), '..', vsixFile));
      console.log(`Copied ${vsixFile} to the parent directory.`);
    } else {
      console.warn('No *.vsix file found in the playwright-vscode directory.');
    }
  } catch (error) {
    console.error('Error running npm commands in playwright-vscode:', error);
    process.exit(1);
  }

  process.chdir(path.join(repoParentFolder, 'playwright-codegen'));
  try {
    execSync('npm ci', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running npm commands in playwright-codegen:', error);
    process.exit(1);
  }
};

function createSymlinks(workingDir: string) {
  process.chdir(workingDir);
  const orig = `../node_modules/@playwright/test`;
  const modifiedOrig = `../node_modules/@playwright/test-orig`;
  const sTrudePlaywright = `../../${folderName}/playwright-codegen/packages/playwright-test`;
  const sTrudePlaywrightLink = `../node_modules/@playwright/test-strude`;
  if (!fs.existsSync(modifiedOrig)) {
    fs.renameSync(orig, modifiedOrig);
  } else {
    if (fs.existsSync(orig)) {
      fs.unlinkSync(orig);
    }
  }
  if (fs.existsSync(sTrudePlaywrightLink)) {
    fs.unlinkSync(sTrudePlaywrightLink);
  }
  if (fs.existsSync(sTrudePlaywrightLink)) {
    fs.unlinkSync(sTrudePlaywrightLink);
  }
  fs.symlinkSync(sTrudePlaywright, sTrudePlaywrightLink, 'dir');
  fs.symlinkSync('./test-strude', orig, 'dir');
}

const main = () => {
  const command = process.argv[2];
  fs.mkdirSync(folderName, { recursive: true });
  const workingDir = path.join(process.cwd(), folderName);
  process.chdir(workingDir);

  switch (command) {
    case 'clone':
      cloneRepos();
      break;
    case 'update':
      updateRepos();
      break;
    case 'build':
      buildProjects();
      break;
    default:
      if (fs.existsSync('playwright-vscode') && fs.existsSync('playwright-codegen')) {
        updateRepos();
      } else {
        cloneRepos();
      }
      buildProjects();
      createSymlinks(workingDir);
  }
};

main();