(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_13.6003c445.png"},34:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_01.9796cb99.png"},35:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_02.c5a34105.png"},36:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_03.aea01696.png"},37:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_04.fd993181.png"},38:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_05.a057848e.png"},39:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_06.b9bd5557.png"},40:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_07.69f00541.png"},41:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_08.f5f0d58c.png"},42:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_09.90a34e07.png"},43:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_10.5d3ffdcf.png"},44:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_11.d59e3ea5.png"},45:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_12.2af032e1.png"},46:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_14.ec07f7fd.png"},47:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_15.992f3920.png"},48:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_16.62707948.png"},49:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_17.35711eaa.png"},50:function(e,t,a){e.exports=a.p+"static/media/PokemonTypes_18.a07ccb67.png"},52:function(e,t,a){e.exports=a.p+"static/media/pokeball.174f6be2.png"},53:function(e,t,a){e.exports=a(86)},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),c=a.n(s),o=a(1),i=a(2),l=a(4),m=a(3),u=a(6),p=(a(58),a(13)),f=a(5),d=a.n(f),v=a(9),h=a(10),g=a.n(h),E=(a(77),a(34)),k=a.n(E),y=a(35),b=a.n(y),N=a(36),x=a.n(N),O=a(37),j=a.n(O),P=a(38),M=a.n(P),_=a(39),w=a.n(_),T=a(40),I=a.n(T),L=a(41),C=a.n(L),S=a(42),A=a.n(S),R=a(43),D=a.n(R),B=a(44),F=a.n(B),G=a(45),X=a.n(G),V=a(19),H=a.n(V),J=a(46),U=a.n(J),W=a(47),q=a.n(W),z=a(48),K=a.n(z),Q=a(49),Y=a.n(Q),Z=a(50),$=a.n(Z),ee=function(e,t){for(var a=String(e);a.length<(t||2);)a="0"+a;return a},te=function(e){switch(e){case"normal":return"#A8A878";case"fire":return"#F08030";case"fighting":return"#C03028";case"water":return"#6890F0";case"flying":return"#A890F0";case"grass":return"#78C850";case"poison":return"#A040A0";case"electric":return"#F8D030";case"ground":return"#E0C068";case"psychic":return"#F85888";case"rock":return"#B8A038";case"ice":return"#98D8D8";case"bug":return"#A8B820";case"dragon":return"#7038F8";case"ghost":return"#705898";case"dark":return"#705848";case"steel":return"#B8B8D0";case"fairy":return"#EE99AC";default:return"grey"}},ae=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ne=function(e){switch(e){case"normal":return H.a;case"fire":return I.a;case"fighting":return w.a;case"water":return $.a;case"flying":return C.a;case"grass":return D.a;case"poison":return U.a;case"electric":return j.a;case"ground":return F.a;case"psychic":return q.a;case"rock":return K.a;case"ice":return X.a;case"bug":return k.a;case"dragon":return x.a;case"ghost":return A.a;case"dark":return b.a;case"steel":return Y.a;case"fairy":return M.a;default:return H.a}},re=function(e){if(-1===e)return["None","None"];var t=12.5*e;return[100-t,t]},se=function(e){var t=e/3.048,a=Math.floor(t);return a+"'"+Math.round(12*(t-a))+'"'},ce=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0===t.evolves_to.length?(a.push({evolution:t.species,info:t.evolution_details[0],hasNext:!1}),a):(a.push({evolution:t.species,info:t.evolution_details[0],hasNext:!0}),e(t.evolves_to[0],a))},oe=function(e,t){return e.map((function(e){var t=e.version_group_details[0];return{name:e.move.name,url:e.move.url,levelLearn:t.level_learned_at,moveLearnMethod:t.move_learn_method.name}}))},ie=function(e){var t=[];return t.push.apply(t,Object(p.a)(e.double_damage_from.map((function(e){return{name:e.name,effectiveness:2}})))),t.push.apply(t,Object(p.a)(e.half_damage_from.map((function(e){return{name:e.name,effectiveness:.5}})))),t.push.apply(t,Object(p.a)(e.no_damage_from.map((function(e){return{name:e.name,effectiveness:0}})))),t},le=a(15),me=(a(78),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.id,n=e.types;return r.a.createElement(le.b,{className:"Pokecard",to:"/pokedex/".concat(a)},r.a.createElement("h1",{className:"Pokecard-id"},ee(a,3)),r.a.createElement("h1",{className:"Pokecard-name"},ae(t)),r.a.createElement("div",{className:"Pokecard-img-container"},r.a.createElement("img",{className:"Pokecard-img",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(ee(a,3),".png"),alt:t})),r.a.createElement("div",{className:"Pokecard-types"},n.map((function(e){return r.a.createElement("img",{src:ne(e.name),alt:e.name,key:e.name})}))))}}]),a}(n.Component)),ue=a(52),pe=a.n(ue),fe=(a(84),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("img",{src:pe.a,className:"pokeball",alt:"Loading"}),r.a.createElement("p",null,"Loading..."))}}]),a}(n.Component)),de=78,ve=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).callBack=function(e){n.observer.current&&n.observer.current.disconnect(),n.observer.current=new IntersectionObserver((function(e){e[0].isIntersecting&&!1===n.LoadPokemon()&&console.log("cant load anymore!")})),e&&n.observer.current.observe(e)},n.state={pokemon:[],loading:!0,isLoadingMore:!1},n.observer=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=".concat(de));case 2:return t=e.sent,a=t.data.results.map(function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.url);case 2:return a=e.sent,n=a.data.types.map((function(e){return e.type})),e.abrupt("return",{name:t.name,id:a.data.id,types:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(a);case 6:n=e.sent,this.setState({pokemon:n,loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"LoadPokemon",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({isLoadingMore:!0}),console.log(de),!(de>=780)){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,g.a.get("https://pokeapi.co/api/v2/pokemon/?offset=".concat(de,"&limit=").concat(60));case 6:return t=e.sent,a=t.data.results.map(function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.url);case 2:return a=e.sent,n=a.data.types.map((function(e){return e.type})),e.abrupt("return",{name:t.name,id:a.data.id,types:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10,Promise.all(a);case 10:n=e.sent,de+=60,console.log([].concat(Object(p.a)(this.state.pokemon),Object(p.a)(n))),this.setState((function(e){return{pokemon:[].concat(Object(p.a)(e.pokemon),Object(p.a)(n)),isLoadingMore:!1}}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.pokemon.map((function(t,a){return e.state.pokemon.length-10===a+1?r.a.createElement("div",{ref:e.callBack,style:{display:"inline-block"},key:t.id},r.a.createElement(me,{name:t.name,id:t.id,key:t.id,types:t.types,goToPokemon:e.goToPokemon})):r.a.createElement("div",{style:{display:"inline-block"},key:t.id},r.a.createElement(me,{name:t.name,id:t.id,key:t.id,types:t.types,goToPokemon:e.goToPokemon}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Pokedex"),r.a.createElement(le.b,{to:"/pokedex/".concat(Math.floor(721*Math.random())),className:"Pokedex-random"},"Random")),r.a.createElement("div",{className:"Pokedex"},this.state.loading?r.a.createElement(fe,null):t,this.state.isLoadingMore&&r.a.createElement(fe,null)))}}]),a}(n.Component),he=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"PokemonInfo-species",style:{backgroundColor:te(this.props.color)}},r.a.createElement("h1",null,"Species Info"),r.a.createElement("div",{className:"PokemonInfo-species-item"},r.a.createElement("b",null,"Egg Groups:"),r.a.createElement("div",{className:"egg-groups"},this.props.speciesInfo.eggGroups.map((function(e){return" ".concat(ae(e)," ")})))),r.a.createElement("div",{className:"PokemonInfo-species-item gender"},r.a.createElement("b",null,"Gender Ratio:"),r.a.createElement("div",{className:"PokemonInfo-gender"},r.a.createElement("p",null," ","".concat(this.props.speciesInfo.genderRatio[0],"%"),r.a.createElement("i",{className:"fas fa-mars"})),r.a.createElement("p",null," ","".concat(this.props.speciesInfo.genderRatio[1],"%"),r.a.createElement("i",{className:"fas fa-venus"})))),r.a.createElement("div",{className:"PokemonInfo-species-item"},r.a.createElement("b",null,"Hatch Steps:")," ","".concat(this.props.speciesInfo.hatchRate," Steps")),r.a.createElement("div",{className:"PokemonInfo-species-item"},r.a.createElement("b",null,"Catch Rate:")," ",this.props.speciesInfo.catchRate),r.a.createElement("div",{className:"PokemonInfo-species-item"},r.a.createElement("b",null,"Height:")," ","".concat(this.props.speciesInfo.height.meters," M\n                        (").concat(this.props.speciesInfo.height.feet,") ")),r.a.createElement("div",{className:"PokemonInfo-species-item"},r.a.createElement("b",null,"Weight:")," ".concat(this.props.speciesInfo.weight,"lb")))}}]),a}(n.Component),ge=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=function(e){var t=e.map((function(e){return e.base_stat})),a=Math.max.apply(Math,Object(p.a)(t));return t.map((function(e){return e/a*100+"%"}))}(this.props.stats);return r.a.createElement("div",{className:"PokemonInfo-stats"},r.a.createElement("h1",{className:"Stat-title"},"Base Stats"),this.props.stats.map((function(a,n){return r.a.createElement("div",{className:"Stat",key:a.stat.name},r.a.createElement("p",{className:"Stat-name"},a.stat.name),r.a.createElement("div",{className:"Stat-bar"},r.a.createElement("div",{className:"Stat-bar-fill",style:{backgroundColor:te(e.props.color),width:t[n]}},r.a.createElement("p",{className:"Stat-num"},a.base_stat))))})))}}]),a}(n.Component),Ee=a(22),ke=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.move;return r.a.createElement("div",{className:"Moves-row"},r.a.createElement("div",{className:"Moves-stats"},r.a.createElement("p",{className:"Move-attrib"},e.levelLearn),r.a.createElement("p",{className:"Move-name"},e.name),r.a.createElement("img",{src:ne(e.type),className:"Move-type",alt:e.type}),r.a.createElement("p",{className:"Move-attrib"},e.category),r.a.createElement("p",{className:"Move-attrib"},null!==e.attack?e.attack:"--"),r.a.createElement("p",{className:"Move-attrib"},null!==e.accuracy?e.accuracy:"--"),r.a.createElement("p",{className:"Move-attrib"},e.pp)))}}]),a}(n.Component),ye=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeLearn=function(e){n.setState({currentMoves:n.state.moves.filter((function(t){return t.moveLearnMethod===e.target.getAttribute("name")}))})},n.state={moves:[],currentMoves:[],loading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.moves.map(function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.url);case 2:return a=(a=e.sent).data,n={type:a.type.name,category:a.damage_class.name,attack:a.power,pp:a.pp,accuracy:a.accuracy,effect:a.effect_entries[0].effect},e.abrupt("return",Object(Ee.a)(Object(Ee.a)({},t),n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:t=e.sent,this.setState({moves:t,currentMoves:t.filter((function(e){return"level-up"===e.moveLearnMethod})),loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Moves"},r.a.createElement("h1",null,"Moves"),r.a.createElement("div",{className:"Moves-learn"},r.a.createElement("div",{style:{background:te(this.props.color)},name:"level-up",onClick:this.changeLearn},"Level-Up"),r.a.createElement("div",{style:{background:te(this.props.color)},name:"tutor",onClick:this.changeLearn},"Tutor"),r.a.createElement("div",{style:{background:te(this.props.color)},name:"egg",onClick:this.changeLearn},"Egg"),r.a.createElement("div",{style:{background:te(this.props.color)},name:"machine",onClick:this.changeLearn},"HM/TM")),r.a.createElement("div",{className:"Moves-bar",style:{background:te(this.props.color)}},r.a.createElement("p",{className:"Move-attrib"},"Level"),r.a.createElement("p",{className:"Move-name"},"Attack Name"),r.a.createElement("p",{className:"Move-type"},"Type"),r.a.createElement("p",{className:"Move-attrib"},"Cat."),r.a.createElement("p",{className:"Move-attrib"},"Attack"),r.a.createElement("p",{className:"Move-attrib"},"Acc."),r.a.createElement("p",{className:"Move-attrib"},"PP")),r.a.createElement("div",{className:this.state.loading?"Moves-Loading":"Pokemon-Info-Moves"},this.state.loading?r.a.createElement(fe,null):this.state.currentMoves.map((function(e){return r.a.createElement(ke,{move:e,key:e.name})}))),r.a.createElement("div",{className:"Moves-padding",style:{background:te(this.props.color)}}))}}]),a}(n.Component),be=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"TypeLine"},r.a.createElement("h1",null,this.props.times),r.a.createElement("div",{className:"TypeLine-Types"},this.props.typeEffect.map((function(e){return r.a.createElement("img",{className:"TypeLine-img",src:ne(e.name),alt:e.name,key:e.name})}))))}}]),a}(n.Component),Ne=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fourTimesEffective:[],twoTimesEffective:[],notVeryEffective:[],notEffective:[],notDamaged:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.types.map(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.url);case 2:return a=(a=e.sent).data.damage_relations,e.abrupt("return",ie(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:if(t=e.sent,a=[],n=[],2===t.length){for(a=t[0].map((function(e){for(var a=0;a<t[1].length;a++)if(t[1][a].name===e.name)return{name:e.name,effectiveness:t[1][a].effectiveness*e.effectiveness};return e})),r=t[0].map((function(e){return e.name})),s=0;s<t[1].length;s++)r.includes(t[1][s].name)||n.push(t[1][s]);c=[].concat(n,Object(p.a)(a)).filter((function(e){return 1!==e.effectiveness})),console.log(c),this.setState({fourTimesEffective:c.filter((function(e){return 4===e.effectiveness})),twoTimesEffective:c.filter((function(e){return 2===e.effectiveness})),notEffective:c.filter((function(e){return.5===e.effectiveness})),notVeryEffective:c.filter((function(e){return.25===e.effectiveness})),notDamaged:c.filter((function(e){return 0===e.effectiveness}))})}else this.setState({fourTimesEffective:t[0].filter((function(e){return 4===e.effectiveness})),twoTimesEffective:t[0].filter((function(e){return 2===e.effectiveness})),notEffective:t[0].filter((function(e){return.5===e.effectiveness})),notVeryEffective:t[0].filter((function(e){return.25===e.effectiveness})),notDamaged:t[0].filter((function(e){return 0===e.effectiveness}))});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"TypeMatchups"},r.a.createElement("h1",null,"Type Matchups"),r.a.createElement(be,{typeEffect:this.state.fourTimesEffective,times:"4X"}),r.a.createElement(be,{typeEffect:this.state.twoTimesEffective,times:"2X"}),r.a.createElement(be,{typeEffect:this.state.notEffective,times:"0.5X"}),r.a.createElement(be,{typeEffect:this.state.notVeryEffective,times:"0.25X"}),r.a.createElement(be,{typeEffect:this.state.notDamaged,times:"0X"}))}}]),a}(n.Component),xe=(a(85),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).goNext=function(){console.log(+n.id+1),+n.id+1===808?n.props.history.push("/pokedex/1"):n.props.history.push("/pokedex/".concat(parseInt(n.id)+1))},n.goPrevious=function(){n.props.history.push("/pokedex/".concat(parseInt(n.id)-1))},n.goTo=function(e){n.props.history.push("/pokedex/".concat(e))},n.state={loading:!0,name:"",genera:"",types:[{name:"",url:""}],speciesInfo:{eggGroups:[],genderRatio:"",hatchRate:"",catchRate:"",height:{feet:"",meters:""},weight:""},stats:[],abilities:[],evoLine:[],moves:[]},n.id=n.props.match.params.id,n.url_pokemon="https://pokeapi.co/api/v2/pokemon/".concat(n.id),n.url_species="https://pokeapi.co/api/v2/pokemon-species/".concat(n.id,"/"),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,s,c,o,i,l,m,u,p,f,v,h,E;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(this.url_pokemon);case 2:return t=(t=e.sent).data,e.next=6,g.a.get(this.url_species);case 6:return a=(a=e.sent).data,n=a.evolution_chain.url,e.next=11,g.a.get(n);case 11:r=(r=e.sent).data.chain,s=(s=a.genera.filter((function(e){return"en"===e.language.name})))[0].genus,c=t.types.map((function(e){return e.type})),o=a.egg_groups.map((function(e){return e.name})),i=re(a.gender_rate),l=255*(a.hatch_counter+1),m=a.capture_rate,u={meters:(d=t.height,d/10),feet:se(t.height)},p=Math.round(t.weight/4.536*10)/10,f=t.stats,v=t.abilities,(h=ce(r)).forEach((function(e){e.id=e.evolution.url.split("/")[6]})),E=oe(t.moves),this.setState({loading:!1,name:t.name,genera:s,types:c,speciesInfo:{eggGroups:o,genderRatio:i,hatchRate:l,catchRate:m,height:u,weight:p},stats:f,abilities:v,evoLine:h,moves:E});case 28:case"end":return e.stop()}var d}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.moves.sort((function(e,t){return e.levelLearn-t.levelLearn})),this.state.loading?r.a.createElement(fe,null):r.a.createElement("div",{className:"PokemonInfo"},r.a.createElement("div",{className:"PokemonInfo-title"},r.a.createElement("h1",{onClick:this.goPrevious,className:"arrow"},r.a.createElement("i",{className:"fas fa-arrow-left"})),r.a.createElement("h1",{className:"PokemonInfo-name"},this.state.name),r.a.createElement("h1",{className:"PokemonInfo-id"},"#".concat(this.id)),r.a.createElement("h1",{onClick:this.goNext,className:"arrow"},r.a.createElement("i",{className:"fas fa-arrow-right"}))),r.a.createElement(le.b,{className:"exit",to:"/pokedex"},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("h2",{className:"PokemonInfo-genus",style:{backgroundColor:te(this.state.types[0].name)}},"The ".concat(this.state.genera)),r.a.createElement("div",{className:"PokemonInfo-img-container"},r.a.createElement("img",{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(ee(this.id,3),".png"),alt:this.state.name,className:"PokemonInfo-img"})),r.a.createElement("div",{className:"PokemonInfo-types"},this.state.types.map((function(e){return r.a.createElement("img",{src:ne(e.name),alt:e.name,key:e.name})}))),r.a.createElement("div",{className:"PokemonInfo-Row-1"},r.a.createElement(he,{color:this.state.types[0].name,speciesInfo:this.state.speciesInfo}),r.a.createElement(ge,{stats:this.state.stats,color:this.state.types[0].name})),r.a.createElement("div",{className:"PokemonInfo-abilities"},r.a.createElement("h1",null,"Abilities"),r.a.createElement("div",{className:"ability-container"},this.state.abilities.map((function(t){return r.a.createElement("div",{className:"ability",key:t.ability.name,style:t.is_hidden?{}:{backgroundColor:te(e.state.types[0].name)}},t.ability.name)})))),r.a.createElement("div",{className:"Pokemon-Info-evolutions"},r.a.createElement("h1",null,"Evolution Line"),r.a.createElement("div",{className:"evolutions"},this.state.evoLine.map((function(t){return r.a.createElement("div",{key:t.id,onClick:e.goTo.bind(e,t.id),className:"evolution"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(ee(t.id,3),".png"),alt:t.name}),r.a.createElement("p",null,t.evolution.name)),t.hasNext&&r.a.createElement("i",{className:"fas fa-arrow-right fa-2x evolution-arrow"}))})))),r.a.createElement(ye,{moves:this.state.moves,color:this.state.types[0].name}),r.a.createElement(Ne,{types:this.state.types}))}}]),a}(n.Component)),Oe=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/pokedex",render:function(e){return r.a.createElement(ve,e)}}),r.a.createElement(u.b,{exact:!0,path:"/pokedex/:id",render:function(e){return r.a.createElement(xe,Object.assign({},e,{key:"testid= /pokedex/:".concat(e.match.params.id)}))}}),r.a.createElement(u.a,{to:"/pokedex"})))}}]),a}(n.Component);c.a.render(r.a.createElement(le.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d0ab4e79.chunk.js.map