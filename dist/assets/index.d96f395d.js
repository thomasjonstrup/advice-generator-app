import{u as o,R as e,Q as l,a as d,b as u}from"./vendor.54f0120d.js";const m=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};m();var f="/assets/pattern-divider-mobile.b5c73e4e.svg",p="/assets/icon-dice.60cce3a8.svg";const v=()=>{const{isLoading:s,isSuccess:n,data:a}=o("data",()=>fetch("https://api.adviceslip.com/advice",{method:"GET"}).then(c=>c.json()));return s||!n?e.createElement("div",{className:"container"},e.createElement("div",{className:"quote"},e.createElement("p",null,"Loading.."))):e.createElement("div",{className:"container"},e.createElement("div",{className:"quote"},e.createElement("p",{className:"secondary-text quote__number"},`Advice #${a.slip.id}`),e.createElement("h1",{className:"primary-text quote__advice"},`"${a.slip.advice}"`),e.createElement("div",{className:"quote__image"},e.createElement("img",{src:f})),e.createElement("div",{className:"quote__dice"},e.createElement("img",{src:p}))))},E=new l;function g(){return e.createElement(d,{client:E},e.createElement(v,null))}u.render(e.createElement(e.StrictMode,null,e.createElement(g,null)),document.getElementById("root"));
