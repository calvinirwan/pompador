// Compiled by ClojureScript 0.0-2322
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_5629 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5629;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5633__delegate = function (x,p__5630){var map__5632 = p__5630;var map__5632__$1 = ((cljs.core.seq_QMARK_.call(null,map__5632))?cljs.core.apply.call(null,cljs.core.hash_map,map__5632):map__5632);var validator = cljs.core.get.call(null,map__5632__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__5632__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5633 = function (x,var_args){
var p__5630 = null;if (arguments.length > 1) {
  p__5630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5633__delegate.call(this,x,p__5630);};
G__5633.cljs$lang$maxFixedArity = 1;
G__5633.cljs$lang$applyTo = (function (arglist__5634){
var x = cljs.core.first(arglist__5634);
var p__5630 = cljs.core.rest(arglist__5634);
return G__5633__delegate(x,p__5630);
});
G__5633.cljs$core$IFn$_invoke$arity$variadic = G__5633__delegate;
return G__5633;
})()
;
atom = function(x,var_args){
var p__5630 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj5636 = {};return obj5636;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5638 = {};return obj5638;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (reagent.ratom.run[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (reagent.ratom.run["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj5640 = {};return obj5640;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3546__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3546__auto__ = k;if(and__3546__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3546__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4185__auto__ = (((k == null))?null:k);return (function (){var or__3558__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3546__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3546__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3558__auto__ = self__.auto_run;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__5641_5653 = cljs.core.seq.call(null,derefed);var chunk__5642_5654 = null;var count__5643_5655 = (0);var i__5644_5656 = (0);while(true){
if((i__5644_5656 < count__5643_5655))
{var w_5657 = cljs.core._nth.call(null,chunk__5642_5654,i__5644_5656);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5657))
{} else
{cljs.core.add_watch.call(null,w_5657,this$__$1,reagent.ratom._handle_change);
}
{
var G__5658 = seq__5641_5653;
var G__5659 = chunk__5642_5654;
var G__5660 = count__5643_5655;
var G__5661 = (i__5644_5656 + (1));
seq__5641_5653 = G__5658;
chunk__5642_5654 = G__5659;
count__5643_5655 = G__5660;
i__5644_5656 = G__5661;
continue;
}
} else
{var temp__4126__auto___5662 = cljs.core.seq.call(null,seq__5641_5653);if(temp__4126__auto___5662)
{var seq__5641_5663__$1 = temp__4126__auto___5662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5641_5663__$1))
{var c__4314__auto___5664 = cljs.core.chunk_first.call(null,seq__5641_5663__$1);{
var G__5665 = cljs.core.chunk_rest.call(null,seq__5641_5663__$1);
var G__5666 = c__4314__auto___5664;
var G__5667 = cljs.core.count.call(null,c__4314__auto___5664);
var G__5668 = (0);
seq__5641_5653 = G__5665;
chunk__5642_5654 = G__5666;
count__5643_5655 = G__5667;
i__5644_5656 = G__5668;
continue;
}
} else
{var w_5669 = cljs.core.first.call(null,seq__5641_5663__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5669))
{} else
{cljs.core.add_watch.call(null,w_5669,this$__$1,reagent.ratom._handle_change);
}
{
var G__5670 = cljs.core.next.call(null,seq__5641_5663__$1);
var G__5671 = null;
var G__5672 = (0);
var G__5673 = (0);
seq__5641_5653 = G__5670;
chunk__5642_5654 = G__5671;
count__5643_5655 = G__5672;
i__5644_5656 = G__5673;
continue;
}
}
} else
{}
}
break;
}
var seq__5645_5674 = cljs.core.seq.call(null,self__.watching);var chunk__5646_5675 = null;var count__5647_5676 = (0);var i__5648_5677 = (0);while(true){
if((i__5648_5677 < count__5647_5676))
{var w_5678 = cljs.core._nth.call(null,chunk__5646_5675,i__5648_5677);if(cljs.core.contains_QMARK_.call(null,derefed,w_5678))
{} else
{cljs.core.remove_watch.call(null,w_5678,this$__$1);
}
{
var G__5679 = seq__5645_5674;
var G__5680 = chunk__5646_5675;
var G__5681 = count__5647_5676;
var G__5682 = (i__5648_5677 + (1));
seq__5645_5674 = G__5679;
chunk__5646_5675 = G__5680;
count__5647_5676 = G__5681;
i__5648_5677 = G__5682;
continue;
}
} else
{var temp__4126__auto___5683 = cljs.core.seq.call(null,seq__5645_5674);if(temp__4126__auto___5683)
{var seq__5645_5684__$1 = temp__4126__auto___5683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5645_5684__$1))
{var c__4314__auto___5685 = cljs.core.chunk_first.call(null,seq__5645_5684__$1);{
var G__5686 = cljs.core.chunk_rest.call(null,seq__5645_5684__$1);
var G__5687 = c__4314__auto___5685;
var G__5688 = cljs.core.count.call(null,c__4314__auto___5685);
var G__5689 = (0);
seq__5645_5674 = G__5686;
chunk__5646_5675 = G__5687;
count__5647_5676 = G__5688;
i__5648_5677 = G__5689;
continue;
}
} else
{var w_5690 = cljs.core.first.call(null,seq__5645_5684__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_5690))
{} else
{cljs.core.remove_watch.call(null,w_5690,this$__$1);
}
{
var G__5691 = cljs.core.next.call(null,seq__5645_5684__$1);
var G__5692 = null;
var G__5693 = (0);
var G__5694 = (0);
seq__5645_5674 = G__5691;
chunk__5646_5675 = G__5692;
count__5647_5676 = G__5693;
i__5648_5677 = G__5694;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__5649_5695 = cljs.core.seq.call(null,self__.watching);var chunk__5650_5696 = null;var count__5651_5697 = (0);var i__5652_5698 = (0);while(true){
if((i__5652_5698 < count__5651_5697))
{var w_5699 = cljs.core._nth.call(null,chunk__5650_5696,i__5652_5698);cljs.core.remove_watch.call(null,w_5699,this$__$1);
{
var G__5700 = seq__5649_5695;
var G__5701 = chunk__5650_5696;
var G__5702 = count__5651_5697;
var G__5703 = (i__5652_5698 + (1));
seq__5649_5695 = G__5700;
chunk__5650_5696 = G__5701;
count__5651_5697 = G__5702;
i__5652_5698 = G__5703;
continue;
}
} else
{var temp__4126__auto___5704 = cljs.core.seq.call(null,seq__5649_5695);if(temp__4126__auto___5704)
{var seq__5649_5705__$1 = temp__4126__auto___5704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5649_5705__$1))
{var c__4314__auto___5706 = cljs.core.chunk_first.call(null,seq__5649_5705__$1);{
var G__5707 = cljs.core.chunk_rest.call(null,seq__5649_5705__$1);
var G__5708 = c__4314__auto___5706;
var G__5709 = cljs.core.count.call(null,c__4314__auto___5706);
var G__5710 = (0);
seq__5649_5695 = G__5707;
chunk__5650_5696 = G__5708;
count__5651_5697 = G__5709;
i__5652_5698 = G__5710;
continue;
}
} else
{var w_5711 = cljs.core.first.call(null,seq__5649_5705__$1);cljs.core.remove_watch.call(null,w_5711,this$__$1);
{
var G__5712 = cljs.core.next.call(null,seq__5649_5705__$1);
var G__5713 = null;
var G__5714 = (0);
var G__5715 = (0);
seq__5649_5695 = G__5712;
chunk__5650_5696 = G__5713;
count__5651_5697 = G__5714;
i__5652_5698 = G__5715;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3558__auto__ = self__.auto_run;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__5174__auto___5716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+177+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__5174__auto___5716))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3558__auto__ = self__.auto_run;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null)))))));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5717){var map__5719 = p__5717;var map__5719__$1 = ((cljs.core.seq_QMARK_.call(null,map__5719))?cljs.core.apply.call(null,cljs.core.hash_map,map__5719):map__5719);var derefed = cljs.core.get.call(null,map__5719__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__5719__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__5719__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__5719__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__5717 = null;if (arguments.length > 1) {
  p__5717 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__5717);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5720){
var f = cljs.core.first(arglist__5720);
var p__5717 = cljs.core.rest(arglist__5720);
return make_reaction__delegate(f,p__5717);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map