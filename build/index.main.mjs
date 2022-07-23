// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:15:19:application',
    fs: ['at ./index.rsh:14:12:application call to [unknown function] (defined at: ./index.rsh:14:16:function exp)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:18:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v202, time: v201, didSend: v25, from: v200 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v202, time: v201, didSend: v25, from: v200 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v200],
    evt_cnt: 0,
    funcNum: 1,
    lct: v201,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v205, time: v204, didSend: v31, from: v203 } = txn2;
      
      ;
      const v207 = stdlib.checkedBigNumberify('./index.rsh:23:21:decimal', stdlib.UInt_max, '0');
      const v208 = v204;
      const v215 = stdlib.checkedBigNumberify('./index.rsh:12:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v219 = stdlib.lt(v207, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
        
        return v219;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v200,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v205, time: v204, didSend: v31, from: v203 } = txn2;
  ;
  const v206 = stdlib.addressEq(v200, v203);
  stdlib.assert(v206, {
    at: './index.rsh:21:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v207 = stdlib.checkedBigNumberify('./index.rsh:23:21:decimal', stdlib.UInt_max, '0');
  let v208 = v204;
  let v215 = stdlib.checkedBigNumberify('./index.rsh:12:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v219 = stdlib.lt(v207, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
    
    return v219;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v232], secs: v234, time: v233, didSend: v138, from: v231 } = txn3;
    undefined /* setApiDetails */;
    const v236 = stdlib.addressEq(v231, v200);
    const v237 = v236 ? false : true;
    stdlib.assert(v237, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:27:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)'],
      msg: 'you are the user',
      who: 'Alice'
      });
    ;
    const v242 = stdlib.lt(v207, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '5'));
    if (v242) {
      await txn3.getOutput('User_addUsers', 'v207', ctc3, v207);
      await stdlib.mapSet(map0, v231, null);
      const v249 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
      const cv207 = v249;
      const cv208 = v233;
      const cv215 = v215;
      
      v207 = cv207;
      v208 = cv208;
      v215 = cv215;
      
      continue;}
    else {
      await txn3.getOutput('User_addUsers', 'v207', ctc3, v207);
      const v256 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
      const cv207 = v256;
      const cv208 = v233;
      const cv215 = v215;
      
      v207 = cv207;
      v208 = cv208;
      v215 = cv215;
      
      continue;}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _User_addUsers4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_addUsers4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_addUsers4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v200, v207, v215] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3]);
  const v220 = ctc.selfAddress();
  const v222 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)'],
    msg: 'in',
    who: 'User_addUsers'
    });
  const v223 = stdlib.addressEq(v220, v200);
  const v224 = v223 ? false : true;
  stdlib.assert(v224, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:27:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)'],
    msg: 'you are the user',
    who: 'User_addUsers'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v200, v207, v215, v222],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v232], secs: v234, time: v233, didSend: v138, from: v231 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "User_addUsers"
        });
      ;
      const v242 = stdlib.lt(v207, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '5'));
      if (v242) {
        const v243 = await txn1.getOutput('User_addUsers', 'v207', ctc3, v207);
        
        await stdlib.simMapSet(sim_r, 0, v231, null);
        const v249 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
        const v342 = v249;
        const v344 = v215;
        const v345 = stdlib.lt(v249, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
        if (v345) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v200,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v251 = await txn1.getOutput('User_addUsers', 'v207', ctc3, v207);
        
        const v256 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
        const v346 = v256;
        const v348 = v215;
        const v349 = stdlib.lt(v256, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
        if (v349) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v200,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v232], secs: v234, time: v233, didSend: v138, from: v231 } = txn1;
  undefined /* setApiDetails */;
  const v236 = stdlib.addressEq(v231, v200);
  const v237 = v236 ? false : true;
  stdlib.assert(v237, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:27:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)', 'at ./index.rsh:26:29:application call to [unknown function] (defined at: ./index.rsh:26:29:function exp)'],
    msg: 'you are the user',
    who: 'User_addUsers'
    });
  ;
  const v242 = stdlib.lt(v207, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '5'));
  if (v242) {
    const v243 = await txn1.getOutput('User_addUsers', 'v207', ctc3, v207);
    if (v138) {
      stdlib.protect(ctc0, await interact.out(v232, v243), {
        at: './index.rsh:26:11:application',
        fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:11:function exp)', 'at ./index.rsh:30:12:application call to "k" (defined at: ./index.rsh:28:23:function exp)', 'at ./index.rsh:28:23:application call to [unknown function] (defined at: ./index.rsh:28:23:function exp)'],
        msg: 'out',
        who: 'User_addUsers'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v231, null);
    const v249 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
    const v342 = v249;
    const v344 = v215;
    const v345 = stdlib.lt(v249, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
    if (v345) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v251 = await txn1.getOutput('User_addUsers', 'v207', ctc3, v207);
    if (v138) {
      stdlib.protect(ctc0, await interact.out(v232, v251), {
        at: './index.rsh:26:11:application',
        fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:11:function exp)', 'at ./index.rsh:34:12:application call to "k" (defined at: ./index.rsh:28:23:function exp)', 'at ./index.rsh:28:23:application call to [unknown function] (defined at: ./index.rsh:28:23:function exp)'],
        msg: 'out',
        who: 'User_addUsers'
        });
      }
    else {
      }
    
    const v256 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, '1'));
    const v346 = v256;
    const v348 = v215;
    const v349 = stdlib.lt(v256, stdlib.checkedBigNumberify('./index.rsh:25:23:decimal', stdlib.UInt_max, '10'));
    if (v349) {
      return;
      }
    else {
      ;
      return;
      }}
  
  
  };
export async function User_addUsers(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_addUsers expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_addUsers expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _User_addUsers4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`User_addUsers()uint64`],
    pure: [],
    sigs: [`User_addUsers()uint64`]
    },
  appApproval: `BiAFAAEDBAUmAwEAAAgAAAAAAAAAzyI1ADEYQQG9KWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgGLNhoAF0lBABIiNQQjNQaBxqSjqAYSRClCABw2GgIXNQQ2GgM2GgEXSSMMQACzSSQMQAB9JBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/4EgWzX+gShbNf1JNQU1/IAEyJoPuzT8ULAxADT/E0Q0/iEEDEEAHyo0/hZQsDT+FjUHMQAogAEBZjT/NP4jCDIGNP1CAHsqNP4WULA0/hY1BzT/NP4jCDIGNP1CAGMjEkQjNAESRDQESSISTDQCEhFEKGRJNQM1/4AEmouRdLA0/zEAEkQ0/yIyBiJCADNIgaCNBogA2CI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCAFs1/zX+Nf01/DT9gQoMQQAcNPw0/RZQNP8WUChLAVcAMGdIJTUBMgY1AkIAL7EisgE0/7III7IQNPyyB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v232",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v207",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "User_addUsers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v232",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f4438038062000f448339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b610ce8806200025c6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100db578063ab53f2c6146100f0578063e2186a0814610113578063e22833ac1461012657005b80631e93b0f1146100775780632c10a1591461009b5780633bc5b7bf146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a93660046109a4565b61012e565b3480156100ba57600080fd5b506100ce6100c93660046109dc565b610159565b6040516100929190610a0f565b3480156100e757600080fd5b50600154610088565b3480156100fc57600080fd5b50610105610185565b604051610092929190610a56565b6100756101213660046109a4565b610222565b610088610249565b60408051602081019091526000815261015561014f36849003840184610b2b565b8261027b565b5050565b604080516060810182526000808252602082018190529181019190915261017f826103fb565b92915050565b60006060600054600280805461019a90610b61565b80601f01602080910402602001604051908101604052809291908181526020018280546101c690610b61565b80156102135780601f106101e857610100808354040283529160200191610213565b820191906000526020600020905b8154815290600101906020018083116101f657829003601f168201915b50505050509050915091509091565b60408051602081019091526000815261015561024336849003840184610b96565b826104d4565b600061025361085b565b602080820151600090819052604080519283019052815261027482826104d4565b5192915050565b61028b600160005414600a610728565b81516102a690158061029f57508251600154145b600b610728565b6000808055600280546102b890610b61565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490610b61565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b50505050508060200190518101906103499190610bee565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16103a034156008610728565b80516103b8906001600160a01b031633146009610728565b6103c061088a565b815181516001600160a01b0390911690526020808201805160009081905281514393019290925251604001526103f58161074d565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610447576104476109f9565b14156104c4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610488576104886109f9565b6001811115610499576104996109f9565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6104e4600460005414600e610728565b81516104ff9015806104f857508251600154145b600f610728565b60008080556002805461051190610b61565b80601f016020809104026020016040519081016040528092919081815260200182805461053d90610b61565b801561058a5780601f1061055f5761010080835404028352916020019161058a565b820191906000526020600020905b81548152906001019060200180831161056d57829003601f168201915b50505050508060200190518101906105a29190610c1c565b6040805133815285516020808301919091528601515115158183015290519192507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e35919081900360600190a18051610614906001600160a01b0316331461060a57600161060d565b60005b600c610728565b6106203415600d610728565b6005816020015110156106dc577fc6314c53c605009efc88dab7e4dc28dc0e731436efc068ee00702290751c3777816020015160405161066291815260200190565b60405180910390a16020818101518352336000908152600490915260409020805462ff00ff1916600117905561069661088a565b815181516001600160a01b03909116905260208201516106b890600190610c8c565b6020808301805192909252815143910152604080840151915101526103f58161074d565b7fc6314c53c605009efc88dab7e4dc28dc0e731436efc068ee00702290751c3777816020015160405161071191815260200190565b60405180910390a16020810151825261069661088a565b816101555760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151600a11156107fe57610788604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b03168082526020808401805151828501908152905160409081015181860190815260046000554360015581519384019490945290519082015290516060820152608001604051602081830303815290604052600290805190602001906107f99291906108bd565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610841573d6000803e3d6000fd5b506000808055600181905561085890600290610941565b50565b60405180604001604052806000815260200161088560405180602001604052806000151581525090565b905290565b60408051606080820183526000828401818152835283519182018452808252602082810182905293820152909182015290565b8280546108c990610b61565b90600052602060002090601f0160209004810192826108eb5760008555610931565b82601f1061090457805160ff1916838001178555610931565b82800160010185558215610931579182015b82811115610931578251825591602001919060010190610916565b5061093d929150610977565b5090565b50805461094d90610b61565b6000825580601f1061095d575050565b601f01602090049060005260206000209081019061085891905b5b8082111561093d5760008155600101610978565b60006040828403121561099e57600080fd5b50919050565b6000604082840312156109b657600080fd5b6109c0838361098c565b9392505050565b6001600160a01b038116811461085857600080fd5b6000602082840312156109ee57600080fd5b81356109c0816109c7565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610a3457634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610a8a57858101830151858201606001528201610a6e565b81811115610a9c576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715610ae457634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610ae457634e487b7160e01b600052604160045260246000fd5b803580151581146104cf57600080fd5b600060408284031215610b3d57600080fd5b610b45610ab3565b82358152610b5560208401610b1b565b60208201529392505050565b600181811c90821680610b7557607f821691505b6020821081141561099e57634e487b7160e01b600052602260045260246000fd5b60008183036040811215610ba957600080fd5b610bb1610ab3565b833581526020601f1983011215610bc757600080fd5b610bcf610aea565b9150610bdd60208501610b1b565b825260208101919091529392505050565b600060208284031215610c0057600080fd5b610c08610aea565b8251610c13816109c7565b81529392505050565b600060608284031215610c2e57600080fd5b6040516060810181811067ffffffffffffffff82111715610c5f57634e487b7160e01b600052604160045260246000fd5b6040528251610c6d816109c7565b8152602083810151908201526040928301519281019290925250919050565b60008219821115610cad57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212203bab047ad93f67a251f3934d981856070b27f8ea660cec273df7ec5bb1ffd91464736f6c634300080c0033`,
  BytecodeLen: 3908,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:20:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:23:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "User_addUsers": User_addUsers
  };
export const _APIs = {
  User: {
    addUsers: User_addUsers
    }
  };
