"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@graphql-tools/schema");;

/***/ }),

/***/ "@graphql-yoga/node":
/*!*************************************!*\
  !*** external "@graphql-yoga/node" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@graphql-yoga/node");;

/***/ }),

/***/ "(api)/./graphql/schema.ts":
/*!***************************!*\
  !*** ./graphql/schema.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__]);\n_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst typeDefinitions = `\r\n  type Query {\r\n    hello: String!\r\n    info: String!\r\n    feed: [Link!]!\r\n  }\r\n  \r\n  type Link {\r\n    id: ID!\r\n    description: String!\r\n    url: String!\r\n  }\r\n\r\n   type Mutation {\r\n    postLink(url: String!, description: String!): Link!\r\n  }\r\n`;\n// 2\nconst links = [\n    {\n        id: \"link-0\",\n        url: \"https://graphql-yoga.com\",\n        description: \"The easiest way of setting up a GraphQL server\"\n    },\n    {\n        id: \"fbe14a8c-bdca-4840-a8d7-c89b999887cc\",\n        url: \"https://vercel.com\",\n        description: \"Best hosting platform\"\n    }, \n];\nconst resolvers = {\n    Query: {\n        hello: ()=>\"Hello Earth!\",\n        info: ()=>`This is the API of a Hackernews Clone`,\n        // 3\n        feed: ()=>links\n    },\n    Link: {\n        id: (parent)=>parent.id,\n        description: (parent)=>parent.description,\n        url: (parent)=>parent.url\n    },\n    Mutation: {\n        postLink: (parent, args)=>{\n            // 1\n            let idCount = links.length;\n            // 2\n            const link = {\n                id: `link-${idCount}`,\n                description: args.description,\n                url: args.url\n            };\n            links.push(link);\n            return link;\n        }\n    }\n};\nconst schema = (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({\n    resolvers: [\n        resolvers\n    ],\n    typeDefs: [\n        typeDefinitions\n    ]\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3NjaGVtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RDtBQUc3RCxNQUFNQyxlQUFlLEdBQUcsQ0FBQztBQXdCekIsSUFBSTtBQUNKLE1BQU1DLEtBQUssR0FBVztJQUNwQjtRQUNFQyxFQUFFLEVBQUU7OztLQUdMO0lBQ0Q7UUFDRUEsRUFBRSxFQUFFO1FBQ0pDLEdBQUcsRUFBRTs7O0NBR1I7QUFFRCxNQUFNRSxTQUFTLEdBQUc7SUFDaEJDOzs7UUFHRSxJQUFJOztLQUVMO0lBQ0RJLElBQUksRUFBRTtRQUNKUixFQUFFLEVBQUUsQ0FBQ1MsTUFBWSxHQUFLQSxNQUFNLENBQUNULEVBQUU7OztLQUdoQztJQUNEVSxRQUFRLEVBQUU7UUFDUkMsUUFBUSxFQUFFLENBQUNGLE1BQWUsRUFBRUcsSUFBMEMsR0FBSzs7O1lBSXpFLElBQUk7WUFDSjtnQkFDRVosRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFYTtnQkFDWlgsV0FBVyxFQUFFVSxJQUFJLENBQUNWLFdBQVc7O2FBRTlCOzs7U0FLRjtLQUNGO0NBQ0Y7QUFFRDtJQUNFQyxTQUFTLEVBQUU7UUFBQ0EsU0FBUztLQUFDO0lBQ3RCZSxRQUFRLEVBQUU7UUFBQ3BCO0tBQWdCO0NBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2dyYXBocWwvc2NoZW1hLnRzPzEyYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdAZ3JhcGhxbC10b29scy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCB0eXBlRGVmaW5pdGlvbnMgPSBgXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBoZWxsbzogU3RyaW5nIVxyXG4gICAgaW5mbzogU3RyaW5nIVxyXG4gICAgZmVlZDogW0xpbmshXSFcclxuICB9XHJcbiAgXHJcbiAgdHlwZSBMaW5rIHtcclxuICAgIGlkOiBJRCFcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmchXHJcbiAgICB1cmw6IFN0cmluZyFcclxuICB9XHJcblxyXG4gICB0eXBlIE11dGF0aW9uIHtcclxuICAgIHBvc3RMaW5rKHVybDogU3RyaW5nISwgZGVzY3JpcHRpb246IFN0cmluZyEpOiBMaW5rIVxyXG4gIH1cclxuYDtcclxuXHJcbnR5cGUgTGluayA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vLyAyXHJcbmNvbnN0IGxpbmtzOiBMaW5rW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdsaW5rLTAnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9ncmFwaHFsLXlvZ2EuY29tJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGVhc2llc3Qgd2F5IG9mIHNldHRpbmcgdXAgYSBHcmFwaFFMIHNlcnZlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ZiZTE0YThjLWJkY2EtNDg0MC1hOGQ3LWM4OWI5OTk4ODdjYycsXHJcbiAgICB1cmw6ICdodHRwczovL3ZlcmNlbC5jb20nLFxyXG4gICAgZGVzY3JpcHRpb246ICdCZXN0IGhvc3RpbmcgcGxhdGZvcm0nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6IHtcclxuICAgIGhlbGxvOiAoKSA9PiAnSGVsbG8gRWFydGghJyxcclxuICAgIGluZm86ICgpID0+IGBUaGlzIGlzIHRoZSBBUEkgb2YgYSBIYWNrZXJuZXdzIENsb25lYCxcclxuICAgIC8vIDNcclxuICAgIGZlZWQ6ICgpID0+IGxpbmtzLFxyXG4gIH0sXHJcbiAgTGluazoge1xyXG4gICAgaWQ6IChwYXJlbnQ6IExpbmspID0+IHBhcmVudC5pZCxcclxuICAgIGRlc2NyaXB0aW9uOiAocGFyZW50OiBMaW5rKSA9PiBwYXJlbnQuZGVzY3JpcHRpb24sXHJcbiAgICB1cmw6IChwYXJlbnQ6IExpbmspID0+IHBhcmVudC51cmwsXHJcbiAgfSxcclxuICBNdXRhdGlvbjoge1xyXG4gICAgcG9zdExpbms6IChwYXJlbnQ6IHVua25vd24sIGFyZ3M6IHsgZGVzY3JpcHRpb246IHN0cmluZzsgdXJsOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAvLyAxXHJcbiAgICAgIGxldCBpZENvdW50ID0gbGlua3MubGVuZ3RoO1xyXG5cclxuICAgICAgLy8gMlxyXG4gICAgICBjb25zdCBsaW5rOiBMaW5rID0ge1xyXG4gICAgICAgIGlkOiBgbGluay0ke2lkQ291bnR9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYXJncy5kZXNjcmlwdGlvbixcclxuICAgICAgICB1cmw6IGFyZ3MudXJsLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGlua3MucHVzaChsaW5rKTtcclxuXHJcbiAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcclxuICByZXNvbHZlcnM6IFtyZXNvbHZlcnNdLFxyXG4gIHR5cGVEZWZzOiBbdHlwZURlZmluaXRpb25zXSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsInR5cGVEZWZpbml0aW9ucyIsImxpbmtzIiwiaWQiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInJlc29sdmVycyIsIlF1ZXJ5IiwiaGVsbG8iLCJpbmZvIiwiZmVlZCIsIkxpbmsiLCJwYXJlbnQiLCJNdXRhdGlvbiIsInBvc3RMaW5rIiwiYXJncyIsImlkQ291bnQiLCJsZW5ndGgiLCJsaW5rIiwicHVzaCIsInNjaGVtYSIsInR5cGVEZWZzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./graphql/schema.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/graphql.ts":
/*!**********************************!*\
  !*** ./src/pages/api/graphql.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _graphql_yoga_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-yoga/node */ \"@graphql-yoga/node\");\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphql/schema */ \"(api)/./graphql/schema.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphql_yoga_node__WEBPACK_IMPORTED_MODULE_0__, _graphql_schema__WEBPACK_IMPORTED_MODULE_1__]);\n([_graphql_yoga_node__WEBPACK_IMPORTED_MODULE_0__, _graphql_schema__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst server = (0,_graphql_yoga_node__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n    schema: _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.schema\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (server);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dyYXBocWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBRUo7QUFHOUMsTUFBTUUsTUFBTSxHQUFHRixnRUFBWSxDQUd4QjtJQUFDQyxNQUFNO0NBQUMsQ0FBQztBQUVaLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2dyYXBocWwudHM/ZjA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tICdAZ3JhcGhxbC15b2dhL25vZGUnO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7c2NoZW1hfSBmcm9tICcuLi8uLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuXHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXI8e1xyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3Q7XHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U7XHJcbn0+KHtzY2hlbWF9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlciIsInNjaGVtYSIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/graphql.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();