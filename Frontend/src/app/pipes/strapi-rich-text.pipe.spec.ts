import { StrapiRichTextPipe } from './strapi-rich-text.pipe';

describe('StrapiRichTextPipe', () => {
  it('create an instance', () => {
    const pipe = new StrapiRichTextPipe();
    expect(pipe).toBeTruthy();
  });
});
