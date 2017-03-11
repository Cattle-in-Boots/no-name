/**
 * Created by hf on 2017/2/13.
 */
/*
* 去除query string
* @param {string} url
* @return {string}
* */
export default function trimQs(url) {
    return url?url.split('?')[0]:"";
}