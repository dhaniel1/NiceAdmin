// type ErrorParser = Record<string, any>;
type ErrorParser = { [key: string]: any };

export const errorParser = (
  errors: ErrorParser,
  touched: ErrorParser,
  name: string
): boolean => {
  return (touched[name] && errors[name]);
};
