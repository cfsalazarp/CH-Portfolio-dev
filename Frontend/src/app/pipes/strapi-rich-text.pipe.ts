import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'strapiRichText'
})
export class StrapiRichTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value: any[]): SafeHtml {
    if (!Array.isArray(value) || value.length === 0) return '';
    
    const html = value.map(this.processBlock.bind(this)).join('');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private processBlock(block: any): string {
    switch (block.type) {
      case 'paragraph':
        return `<p>${block.children.map(this.renderChild.bind(this)).join('')}</p>`;
      case 'heading':
        return `<h${block.level || 2}>${block.children.map(this.renderChild.bind(this)).join('')}</h${block.level || 2}>`;
      case 'list':
        return this.processList(block);
      case 'quote':
        return `<blockquote>${block.children.map(this.renderChild.bind(this)).join('')}</blockquote>`;
      case 'code':
        return `<pre><code>${block.text}</code></pre>`;
      default:
        return '';
    }
  }

  private processList(list: any): string {
    const tag = list.ordered ? 'ol' : 'ul';
    return `<${tag}>${list.children.map((item: { children: any[]; }) => `<li>${item.children.map(this.renderChild.bind(this)).join('')}</li>`).join('')}</${tag}>`;
  }

  private renderChild(child: any): string {
    if (child.type === 'text') {
      return this.formatText(child);
    }
    if (child.type === 'link' && child.url) {
      return this.formatLink(child);
    }
    return '';
  }

  private formatText(child: any): string {
    let text = child.text || '';
    if (child.bold) text = `<strong>${text}</strong>`;
    if (child.italic) text = `<em>${text}</em>`;
    if (child.underline) text = `<u>${text}</u>`;
    if (child.strikethrough) text = `<s>${text}</s>`;
    return text;
  }

  private formatLink(child: any): string {
    const linkText = child.children?.map((c: any) => c.text).join('') || '';
    return `<a href="${child.url}" target="_blank">${linkText}</a>`;
  }

}
