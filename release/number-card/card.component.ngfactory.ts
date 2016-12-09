/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/number-card/card.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '@angular/core/src/security';
export class Wrapper_CardComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CardComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.CardComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._changes['color'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_x(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.x = currValue;
      this._changes['x'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_y(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.y = currValue;
      this._changes['y'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._changes['width'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_label(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.label = currValue;
      this._changes['label'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_CardComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CardComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CardComponent>;
  _CardComponent_0_3:Wrapper_CardComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CardComponent_Host0,renderType_CardComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'card',''),rootSelector,(null as any));
    this.compView_0 = new View_CardComponent0(this.viewUtils,this,0,this._el_0);
    this._CardComponent_0_3 = new Wrapper_CardComponent(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._CardComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._CardComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CardComponent) && (0 === requestNodeIndex))) { return this._CardComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CardComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CardComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CardComponentNgFactory:import7.ComponentFactory<import0.CardComponent> = new import7.ComponentFactory<import0.CardComponent>('g[card]',View_CardComponent_Host0,import0.CardComponent);
const styles_CardComponent:any[] = ([] as any[]);
var renderType_CardComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_CardComponent,{});
export class View_CardComponent0 extends import2.AppView<import0.CardComponent> {
  _viewQuery_textEl_0:import10.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CardComponent0,renderType_CardComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
    this._expr_22 = import1.UNINITIALIZED;
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
    this._expr_25 = import1.UNINITIALIZED;
    this._expr_26 = import1.UNINITIALIZED;
    this._expr_27 = import1.UNINITIALIZED;
    this._expr_28 = import1.UNINITIALIZED;
    this._expr_29 = import1.UNINITIALIZED;
    this._expr_30 = import1.UNINITIALIZED;
    this._expr_31 = import1.UNINITIALIZED;
    this._expr_32 = import1.UNINITIALIZED;
    this._expr_33 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_textEl_0 = new import10.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',new import3.InlineArray2(2,'class','cell'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:rect',new import3.InlineArray8(8,'class','card','rx','3','ry','3','style','cursor: pointer;'),(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,':svg:title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_1,':svg:foreignObject',new import3.InlineArray4(4,'style','font-size: 12px;\n               pointer-events: none;\n               text-transform: uppercase;\n               overflow: hidden;\n               text-align: center;\n               line-height: 1em;','x','5'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,':xhtml:p',new import3.InlineArray2(2,'style','overflow: hidden;\n                 white-space: nowrap;\n                 text-overflow: ellipsis;\n                 width: 100%;'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_13 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_1,':svg:text',new import3.InlineArray8(8,'class','value-text','dy','.35em','style','pointer-events: none;','text-anchor','middle'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this._viewQuery_textEl_0.reset([new import8.ElementRef(this._el_14)]);
    this.context.textEl = this._viewQuery_textEl_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementAttribute(this._el_1,'transform',((currVal_19 == null)? (null as any): currVal_19.toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this.context.color;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementStyle(this._el_3,'fill',((this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_20) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_20).toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context.cardWidth;
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementAttribute(this._el_3,'width',((currVal_21 == null)? (null as any): currVal_21.toString()));
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this.context.cardHeight;
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementAttribute(this._el_3,'height',((currVal_22 == null)? (null as any): currVal_22.toString()));
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = import3.inlineInterpolate(1,'',this.context.label,'');
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setText(this._text_6,currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = (this.context.height * 0.7);
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementAttribute(this._el_8,'y',((currVal_24 == null)? (null as any): currVal_24.toString()));
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this.context.textWidth;
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementAttribute(this._el_8,'width',((currVal_25 == null)? (null as any): currVal_25.toString()));
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = (this.context.height * 0.3);
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementAttribute(this._el_8,'height',((currVal_26 == null)? (null as any): currVal_26.toString()));
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = this.context.getTextColor(this.context.color);
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementStyle(this._el_10,'color',((this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_27) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_27).toString()));
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = import3.inlineInterpolate(1,'\n          ',this.context.trimmedLabel,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setText(this._text_11,currVal_28);
      this._expr_28 = currVal_28;
    }
    const currVal_29:any = (this.context.cardWidth / 2);
    if (import3.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementAttribute(this._el_14,'x',((currVal_29 == null)? (null as any): currVal_29.toString()));
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = (this.context.height * 0.3);
    if (import3.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setElementAttribute(this._el_14,'y',((currVal_30 == null)? (null as any): currVal_30.toString()));
      this._expr_30 = currVal_30;
    }
    const currVal_31:any = this.context.getTextColor(this.context.color);
    if (import3.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setElementStyle(this._el_14,'fill',((this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_31) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_31).toString()));
      this._expr_31 = currVal_31;
    }
    const currVal_32:any = this.context.textFontSize;
    if (import3.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementStyle(this._el_14,'font-size',((this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_32) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_32).toString() + 'pt')));
      this._expr_32 = currVal_32;
    }
    const currVal_33:any = import3.inlineInterpolate(1,'\n        ',this.context.value,'\n      ');
    if (import3.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this.renderer.setText(this._text_15,currVal_33);
      this._expr_33 = currVal_33;
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}