import React from 'react';
import { IndexLink, Link } from 'react-router';
import Ripple from 'react-toolbox/lib/ripple';


const Rip = Ripple({spread: 3});


export const LinkR = Rip(Link);
export const IndexLinkR = Rip(IndexLink);
