import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'strapiRichText'
})
export class StrapiRichTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value: any[]): SafeHtml {
    if (!value) return '';
    const html = value.map(paragraph => {
      if (paragraph.type === 'paragraph' && paragraph.children){
        return `<p>${paragraph.children.map((child: any) => this.renderChild(child)).join('')}</p>`;
      }
      return '';
    }).join('');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  renderChild(child: any): string {
    if (child.type === 'bold') {
      return child.bold ? `<strong>${child.text}</strong>` : child.text;
    }
    if (child.type === 'link' && child.url) {
      return `<a href="${child.url}" target="_blank">${child.children.map((c: any) => this.renderChild(c)).join('')}</a>`;
    }
    return '';
  }

}
