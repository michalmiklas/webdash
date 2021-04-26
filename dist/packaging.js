var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="packaging.data";var REMOTE_PACKAGE_BASE="packaging.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","packaging-20.9-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","packaging",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:66464,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1189,2386,3490,4610,5609,6606,7727,8890,9999,11029,12282,13400,14605,15920,17093,18199,19267,20700,21970,23265,24409,25518,26613,27550,28447,29924,31298,32206,33184,34400,35605,36786,37470,38568,39732,40576,41473,42802,44062,45477,46632,47746,48711,49875,50893,52083,52988,54187,55189,56143,57272,58478,59467,60493,61661,62853,64111,65379],sizes:[1189,1197,1104,1120,999,997,1121,1163,1109,1030,1253,1118,1205,1315,1173,1106,1068,1433,1270,1295,1144,1109,1095,937,897,1477,1374,908,978,1216,1205,1181,684,1098,1164,844,897,1329,1260,1415,1155,1114,965,1164,1018,1190,905,1199,1002,954,1129,1206,989,1026,1168,1192,1258,1268,1085],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_packaging.data")}Module["addRunDependency"]("datafile_packaging.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/packaging-20.9-py3.8.egg-info/top_level.txt",start:0,end:10,audio:0},{filename:"/lib/python3.8/site-packages/packaging-20.9-py3.8.egg-info/dependency_links.txt",start:10,end:11,audio:0},{filename:"/lib/python3.8/site-packages/packaging-20.9-py3.8.egg-info/SOURCES.txt",start:11,end:1499,audio:0},{filename:"/lib/python3.8/site-packages/packaging-20.9-py3.8.egg-info/requires.txt",start:1499,end:1516,audio:0},{filename:"/lib/python3.8/site-packages/packaging-20.9-py3.8.egg-info/PKG-INFO",start:1516,end:17895,audio:0},{filename:"/lib/python3.8/site-packages/packaging/markers.py",start:17895,end:27355,audio:0},{filename:"/lib/python3.8/site-packages/packaging/utils.py",start:27355,end:31740,audio:0},{filename:"/lib/python3.8/site-packages/packaging/_structures.py",start:31740,end:33762,audio:0},{filename:"/lib/python3.8/site-packages/packaging/tags.py",start:33762,end:63323,audio:0},{filename:"/lib/python3.8/site-packages/packaging/version.py",start:63323,end:79297,audio:0},{filename:"/lib/python3.8/site-packages/packaging/_typing.py",start:79297,end:81109,audio:0},{filename:"/lib/python3.8/site-packages/packaging/__about__.py",start:81109,end:81835,audio:0},{filename:"/lib/python3.8/site-packages/packaging/specifiers.py",start:81835,end:114043,audio:0},{filename:"/lib/python3.8/site-packages/packaging/_compat.py",start:114043,end:115171,audio:0},{filename:"/lib/python3.8/site-packages/packaging/__init__.py",start:115171,end:115733,audio:0},{filename:"/lib/python3.8/site-packages/packaging/py.typed",start:115733,end:115733,audio:0},{filename:"/lib/python3.8/site-packages/packaging/requirements.py",start:115733,end:120831,audio:0}],remote_package_size:70560,package_uuid:"223ff062-6e94-45e2-a988-178363555012"})})();