import React from 'react';
import BlogPost from './BlogPost/BlogPost';
import {text1, text12, text2} from './blogText/text';
import {TechStickers} from '../TechSticker/TechStickers';

export default function Blog() {
    return( 
    <div>
        <BlogPost name="Rethinking this blog format" text={text2} sticker={<TechStickers title={["Gatsby","server-side","static site generator"]} />} text2={""} date="September 1, 2020"/>
        <BlogPost name="deeper look of node / javascript" text={text1}
         sticker={<TechStickers title={["thread pool", "non-blocking", "event-driven", "event-loop","callstack", "Javascript runtime", "I/O", "asyncronous", "single-threaded", "concurrent"]} /> } 
         text2={text12} date="August 29, 2020"/>
    </div>
    )
}

