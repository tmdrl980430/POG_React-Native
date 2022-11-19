import React from "react";
import {atom} from "recoil";

export const severURLRecoilState = atom(
    {key: 'severURLRecoilState', default: 'http://13.209.151.152'}
);

export const jwtRecoilState = atom({key: 'jwtRecoilState', default: ''});

export const userIdxRecoilState = atom({key: 'userIdxRecoilState', default: ''});


//현재 Login API가 적용되지 않았기 때문에 default 값은 false
export const isLoginRecoilState = atom(
    {key: 'isLoginRecoilState', default: false}
);

