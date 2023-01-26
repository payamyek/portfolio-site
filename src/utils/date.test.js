import { getRelativeDate, MILLISECONDS } from "./dateUtils";

test("relative date for bad date", () => {
  const date = new Date("cant parse");
  expect(getRelativeDate(date)).toMatch("");
});

test("relative date for now", () => {
  const date = new Date();
  expect(getRelativeDate(date)).toMatch("now");
});

test("relative date for one second ago", () => {
  const date = new Date(Date.now() - MILLISECONDS.SECONDS);
  expect(getRelativeDate(date)).toMatch("1 second ago");
});

test("relative date for ten seconds ago", () => {
  const date = new Date(Date.now() - 10 * MILLISECONDS.SECONDS);
  expect(getRelativeDate(date)).toMatch("10 seconds ago");
});

test("relative date for one minute ago", () => {
  const date = new Date(Date.now() - MILLISECONDS.MINUTE);
  expect(getRelativeDate(date)).toMatch("1 minute ago");
});

test("relative date for 10 minutes ago", () => {
  const date = new Date(Date.now() - 10 * MILLISECONDS.MINUTE);
  expect(getRelativeDate(date)).toMatch("10 minutes ago");
});

test("relative date for one hour ago", () => {
  const date = new Date(Date.now() - MILLISECONDS.HOUR);
  expect(getRelativeDate(date)).toMatch("1 hour ago");
});

test("relative date for ten hours ago", () => {
  const date = new Date(Date.now() - 10 * MILLISECONDS.HOUR);
  expect(getRelativeDate(date)).toMatch("10 hours ago");
});

test("relative date for one month ago", () => {
  const date = new Date(Date.now() - MILLISECONDS.MONTH);
  expect(getRelativeDate(date)).toMatch("1 month ago");
});

test("relative date for 10 months ago", () => {
  const date = new Date(Date.now() - 10 * MILLISECONDS.MONTH);
  expect(getRelativeDate(date)).toMatch("10 months ago");
});

test("relative date for one year ago", () => {
  const date = new Date(Date.now() - MILLISECONDS.YEAR);
  expect(getRelativeDate(date)).toMatch("1 year ago");
});

test("relative date for ten years ago", () => {
  const date = new Date(Date.now() - 10 * MILLISECONDS.YEAR);
  expect(getRelativeDate(date)).toMatch("10 years ago");
});
