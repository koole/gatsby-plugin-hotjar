import renderer from "react-test-renderer";
import { onRenderBody } from "../src/gatsby-ssr.js";

const defaultOptions = {
  includeInDevelopment: false,
  id: "TESTID",
  sv: 6,
};

describe("ENV", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test("Not enabled in development", () => {
    process.env.NODE_ENV = "test";
    const options = defaultOptions;
    const result = onRenderBody(
      {
        setPostBodyComponents: () => {},
      },
      options
    );
    expect(result).toBe(null);
  });

  test("Enabled in development", () => {
    process.env.NODE_ENV = "test";
    const options = {
      ...defaultOptions,
      includeInDevelopment: true,
    };
    onRenderBody(
      {
        setPostBodyComponents: (components) => {
          const component = renderer.create(components[0]);
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        },
      },
      options
    );
  });

  test("Enabled in production", () => {
    process.env.NODE_ENV = "production";
    const options = defaultOptions;
    onRenderBody(
      {
        setPostBodyComponents: (components) => {
          const component = renderer.create(components[0]);
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        },
      },
      options
    );
  });
});
