import React from 'react';
import BlogPost from './BlogPost';
import {text1, text12} from './blogText/text';
import {TechStickers} from '../TechSticker/TechStickers';

export default function Blog() {
    return( 
    <div>
        <BlogPost name="deeper look of node / javascript" text={text1} sticker={<TechStickers title={["thread pool", "non-blocking", "event-driven", "event-loop","callstack", "Javascript runtime", "I/O", "asyncronous", "single-threaded", "concurrent"]} /> } text2={text12}/>
    </div>
    )
}

