import React from "react";
import {atom} from "recoil";

export const severURLRecoilState = atom(
    {key: 'severURLRecoilState', default: '서버 주소'}
);

export const jwtRecoilState = atom({key: 'jwtRecoilState', default: ''});


//현재 Login API가 적용되지 않았기 때문에 default 값은 false
export const isLoginRecoilState = atom(
    {key: 'isLoginRecoilState', default: false}
);

export const insuranceCompanyNumber = atom(
    {key: 'insuranceCompanyNumber', default: ''}
);

export const protectorNumber = atom(
    {key: 'protectorNumber', default: '01000000000'}
);