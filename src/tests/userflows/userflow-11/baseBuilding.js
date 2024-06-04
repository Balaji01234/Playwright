export default async function baseBuilding(page) {
  await page.locator("#canvas").click({
    position: {
      x: 259,
      y: 290,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 260,
      y: 497,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 573,
      y: 493,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 572,
      y: 290,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 259,
      y: 286,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 416,
      y: 287,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 415,
      y: 150,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 729,
      y: 149,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 727,
      y: 568,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 492,
      y: 567,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 495,
      y: 494,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 417,
      y: 218,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 571,
      y: 218,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 572,
      y: 289,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 493,
      y: 220,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 493,
      y: 153,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 575,
      y: 443,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 729,
      y: 442,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 259,
      y: 392,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 415,
      y: 392,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 415,
      y: 494,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 494,
      y: 289,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 494,
      y: 498,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 493,
      y: 392,
    },
  });
  await page.locator("#canvas").click({
    position: {
      x: 572,
      y: 390,
    },
  });

  await page.locator("span").filter({ hasText: "Views" }).click();
  await page.getByRole("img", { name: "snapshot" }).click();
  await page.getByText("Design").click();
}
