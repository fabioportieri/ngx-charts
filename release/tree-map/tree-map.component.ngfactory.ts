/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/tree-map/tree-map.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../src/common/charts/chart.component';
import * as import12 from '../../../src/utils/injection.service';
import * as import13 from '../common/charts/chart.component.ngfactory';
import * as import14 from '../../../src/tree-map/tree-map-cell-series.component';
import * as import15 from './tree-map-cell-series.component.ngfactory';
import * as import16 from '@angular/core/src/application_ref';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_TreeMapComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TreeMapComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.TreeMapComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
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
var renderType_TreeMapComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TreeMapComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TreeMapComponent>;
  _TreeMapComponent_0_3:Wrapper_TreeMapComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeMapComponent_Host0,renderType_TreeMapComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'tree-map',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TreeMapComponent0(this.viewUtils,this,0,this._el_0);
    this._TreeMapComponent_0_3 = new Wrapper_TreeMapComponent(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._TreeMapComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TreeMapComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TreeMapComponent) && (0 === requestNodeIndex))) { return this._TreeMapComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._TreeMapComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._TreeMapComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TreeMapComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TreeMapComponentNgFactory:import7.ComponentFactory<import0.TreeMapComponent> = new import7.ComponentFactory<import0.TreeMapComponent>('tree-map',View_TreeMapComponent_Host0,import0.TreeMapComponent);
const styles_TreeMapComponent:any[] = ([] as any[]);
var renderType_TreeMapComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_TreeMapComponent,{});
export class View_TreeMapComponent0 extends import2.AppView<import0.TreeMapComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  compView_1:import2.AppView<import11.ChartComponent>;
  _InjectionService_1_5:import12.InjectionService;
  _ChartComponent_1_6:import13.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import14.TreeMapCellSeriesComponent>;
  _TreeMapCellSeriesComponent_5_3:import15.Wrapper_TreeMapCellSeriesComponent;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _arr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeMapComponent0,renderType_TreeMapComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._arr_15 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_16 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import13.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._InjectionService_1_5 = new import12.InjectionService(this.parentView.injectorGet(import16.ApplicationRef,this.parentIndex),this.parentView.injectorGet(import17.ComponentFactoryResolver,this.parentIndex),this.injector(1));
    this._ChartComponent_1_6 = new import13.Wrapper_ChartComponent(this._vc_1.vcRef,this._InjectionService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','tree-map chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'treeMapCellSeries',''),(null as any));
    this.compView_5 = new import15.View_TreeMapCellSeriesComponent0(this.viewUtils,this,5,this._el_5);
    this._TreeMapCellSeriesComponent_5_3 = new import15.Wrapper_TreeMapCellSeriesComponent();
    this.compView_5.create(this._TreeMapCellSeriesComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,false,false);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'select',(null as any)),this.eventHandler(this.handleEvent_5));
    this._TreeMapCellSeriesComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TreeMapCellSeriesComponent) && (5 === requestNodeIndex))) { return this._TreeMapCellSeriesComponent_5_3.context; }
    if (((token === import12.InjectionService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._InjectionService_1_5; }
    if (((token === import11.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_15(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = false;
    this._ChartComponent_1_6.check_legend(currVal_1_0_1,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.data;
    this._TreeMapCellSeriesComponent_5_3.check_data(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.dims;
    this._TreeMapCellSeriesComponent_5_3.check_dims(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.colors;
    this._TreeMapCellSeriesComponent_5_3.check_colors(currVal_5_0_2,throwOnChange,false);
    if (this._TreeMapCellSeriesComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    const currVal_16:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_16 == null)? (null as any): currVal_16.toString()));
      this._expr_16 = currVal_16;
    }
    this.compView_1.detectChanges(throwOnChange);
    this.compView_5.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._TreeMapCellSeriesComponent_5_3.ngOnDestroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}