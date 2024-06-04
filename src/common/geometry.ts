import CONST from './constants';
import { existsSync } from 'node:fs';
import { dirname, resolve, join } from 'path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { expect as baseExpect, Page } from '@playwright/test';
import { selectAll } from './canvas';

const resurrect = require('resurrect-js');

export type Point = {
  x: number;
  y: number;
};

/**
 * @deprecated use Geometry
 */
export type GeometryOld = {
  brep: object;
  matrix: object;
};

export type Geometry = {
  [key: string]: {
    brep: object;
    matrix: any;
    [prop: string]: any;
  };
};

export async function selectArea(page: Page, start: Point, end: Point) {
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.mouse.move(start.x, start.y);
  await page.mouse.down();
  await page.mouse.move(end.x, end.y);
  await page.mouse.up();
  await page.waitForTimeout(100);
}

export async function selectMesh(page: Page, coordinate: Point) {
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.mouse.click(coordinate.x, coordinate.y);
  await page.waitForTimeout(100);
}

export async function clearSelection(page: Page) {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
}

/**
 * @deprecated use getGeometryV2
 */
export async function getGeometry(page: Page, start: Point, end?: Point): Promise<GeometryOld> {
  if (!end) {
    await selectMesh(page, start);
  } else {
    await selectArea(page, start, end);
  }
  const totalSelections = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack.length;
  });
  if (!totalSelections) {
    await selectAll(page);
  }
  const geometry = await page.evaluate(() => {
    // @ts-ignore
    const selections = store.selectionStack;
    return {
      brep: selections[0]?.getSnaptrudeDS().brep,
      matrix: selections[0]?.getWorldMatrix()
    };
  });
  await clearSelection(page);
  return geometry;
}

export async function getGeometryV2(page: Page, start: Point, end?: Point): Promise<Geometry> {
  if (!end) {
    await selectMesh(page, start);
  } else {
    await selectArea(page, start, end);
  }

  const geometry = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack.reduce((geometry, selection) => {
      const componentTestId = selection.getSnaptrudeDS().internal.testId;
      return {
        ...geometry,
        [componentTestId]: {
          brep: selection.getSnaptrudeDS().brep,
          matrix: selection.getWorldMatrix()
        }
      };
    }, {});
  });
  await clearSelection(page);
  return geometry;
}

export async function saveGeometry(geometry: any, path: string) {
  await writeFile(path, new resurrect().stringify(geometry));
}

export async function getGeometryFromFile(path: string): Promise<any> {
  if (!existsSync(path)) {
    return null;
  }
  const data = await readFile(path, { encoding: 'utf-8' });
  return new resurrect().resurrect(data);
}

export async function createGeometryDir(testDir: string, testFilePath: string) {
  const parentFolderName = dirname(testFilePath);
  const dir = resolve(testDir, '../../testData', parentFolderName, 'geometries');
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  return dir;
}

/**
 * @deprecated use compareGeometryV2
 */
export function compareGeometry(actual: GeometryOld, expected: GeometryOld) {
  // @ts-ignore
  baseExpect(actual.brep.edges.length).toBe(expected.brep.edges.length);
  // @ts-ignore
  baseExpect(actual.brep.faces.length).toBe(expected.brep.faces.length);
  // @ts-ignore
  baseExpect(actual.brep.halfEdges.length).toBe(expected.brep.halfEdges.length);
  // @ts-ignore
  baseExpect(actual.brep.positions.length).toBe(expected.brep.positions.length);
  // @ts-ignore
  baseExpect(actual.brep.vertices.length).toBe(expected.brep.vertices.length);
  // @ts-ignore
  for (let i = 0; i < actual.brep.positions.length; i++) {
    // @ts-ignore
    const actualPos = actual.brep.positions[i];
    // @ts-ignore
    const found = expected.brep.positions.some(async (expectedPos: any[]) => {
      return (
        Math.abs(actualPos[0] - expectedPos[0]) < CONST.TOLERANCE &&
        Math.abs(actualPos[1] - expectedPos[1]) < CONST.TOLERANCE &&
        Math.abs(actualPos[2] - expectedPos[2]) < CONST.TOLERANCE
      );
    });
    baseExpect(found).toBeTruthy();
  }

  // @ts-ignore
  baseExpect(actual.matrix.length).toBe(expected.matrix.length);
  // @ts-ignore
  for (let i = 0; i < actual.matrix.length; i++) {
    baseExpect(actual.matrix[i].length).toBe(expected.matrix[i].length);
    for (let j = 0; j < actual.matrix[i].length; j++) {
      const diff = Math.abs(actual.matrix[i][j] - expected.matrix[i][j]);
      baseExpect(diff).toBeLessThanOrEqual(CONST.TOLERANCE);
    }
  }
}

export function compareGeometryV2(actual: Geometry, expected: Geometry) {
  const actualComponentIds = Object.keys(actual);
  for (let i = 0; i < actualComponentIds.length; i++) {
    const currentId = actualComponentIds[i];
    // @ts-ignore
    baseExpect(actual[currentId].brep.edges.length).toBe(expected[currentId].brep.edges.length);
    // @ts-ignore
    baseExpect(actual[currentId].brep.faces.length).toBe(expected[currentId].brep.faces.length);
    // @ts-ignore
    baseExpect(actual[currentId].brep.halfEdges.length).toBe(
      // @ts-ignore
      expected[currentId].brep.halfEdges.length
    );
    // @ts-ignore
    baseExpect(actual[currentId].brep.positions.length).toBe(
      // @ts-ignore
      expected[currentId].brep.positions.length
    );
    // @ts-ignore
    baseExpect(actual[currentId].brep.vertices.length).toBe(
      // @ts-ignore
      expected[currentId].brep.vertices.length
    );
    // @ts-ignore
    for (let i = 0; i < actual[currentId].brep.positions.length; i++) {
      // @ts-ignore
      const actualPos = actual[currentId].brep.positions[i];
      // @ts-ignore
      const found = expected[currentId].brep.positions.some(async (expectedPos: any[]) => {
        return (
          Math.abs(actualPos[0] - expectedPos[0]) < CONST.TOLERANCE &&
          Math.abs(actualPos[1] - expectedPos[1]) < CONST.TOLERANCE &&
          Math.abs(actualPos[2] - expectedPos[2]) < CONST.TOLERANCE
        );
      });
      baseExpect(found).toBeTruthy();
    }

    if (typeof actual[currentId].matrix === 'string') {
      actual[currentId].matrix = JSON.parse(actual[currentId].matrix);
    }
    if (typeof expected[currentId].matrix === 'string') {
      expected[currentId].matrix = JSON.parse(expected[currentId].matrix);
    }
    // @ts-ignore
    baseExpect(actual[currentId].matrix.length).toBe(expected[currentId].matrix.length);
    // @ts-ignore
    for (let i = 0; i < actual[currentId].matrix.length; i++) {
      baseExpect(actual[currentId].matrix[i].length).toBe(expected[currentId].matrix[i].length);
      for (let j = 0; j < actual[currentId].matrix[i].length; j++) {
        const diff = Math.abs(actual[currentId].matrix[i][j] - expected[currentId].matrix[i][j]);
        baseExpect(diff).toBeLessThanOrEqual(CONST.TOLERANCE);
      }
    }
  }
}

export async function getSnaptrudeDS(page: Page, coordinate: Point) {
  await selectMesh(page, coordinate);
  const snaptrudeDS = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack[0]?.getSnaptrudeDS();
  });
  await clearSelection(page);
  return snaptrudeDS;
}

export async function getSnaptrudeDSType(page: Page, coordinate: Point) {
  await selectMesh(page, coordinate);
  const dstype = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack[0]?.getSnaptrudeDS().type;
  });
  await clearSelection(page);
  return dstype;
}
