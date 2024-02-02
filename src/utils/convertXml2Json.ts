import * as convert from "xml-js";

export function convertXML2Json<T>(xml: string): T {
  const result = convert.xml2json(xml, {
    compact: true,
    spaces: 4,
    alwaysChildren: false,
    ignoreDeclaration: true,
    attributesKey: "attributes",
    textKey: "text",
    cdataKey: "cdata",
    nativeType: true,
  });
  return JSON.parse(result);
}
