export interface LegacyDocumentParts {
  headInner: string;
  bodyClass: string;
  bodyInner: string;
}

export function splitLegacyDocument(documentHtml: string): LegacyDocumentParts {
  return {
    headInner: documentHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '',
    bodyClass: documentHtml.match(/<body[^>]*class="([^"]*)"/i)?.[1] ?? '',
    bodyInner: documentHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '',
  };
}
