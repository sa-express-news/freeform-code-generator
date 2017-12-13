// Set up the 'toggle example' buttons + images as Vue components
var videoToggle = generateExampleVueComponent('#video-vue');
var storyToggle = generateExampleVueComponent('#story-vue');
var atfToggle = generateExampleVueComponent('#atf-vue');

var featureBlockAToggle = generateExampleVueComponent('#related-block-a-vue');
var featureBlockBToggle = generateExampleVueComponent('#related-block-b-vue');


document.getElementById('iframe-form').addEventListener('submit', iframeSubmit);
document.getElementById('copy-iframe-code').addEventListener('click', copyiFrameCode);

document.getElementById('story-form').addEventListener('submit', storySubmit);
document.getElementById('copy-story-code').addEventListener('click', copyStoryCode);

document.getElementById('atf-form').addEventListener('submit', atfSubmit);
document.getElementById('copy-atf-code').addEventListener('click', copyAtfCode);

document.getElementById('related-sidebar-form').addEventListener('submit', sidebarSubmit);
document.getElementById('copy-sidebar-code').addEventListener('click', copySidebarCode);

document.getElementById('related-featureBlock-form').addEventListener('submit', featureBlockSubmit);
document.getElementById('copy-featureBlock-code').addEventListener('click', copyFeatureBlockCode);

document.getElementById('related-featureBlockB-form').addEventListener('submit', featureBlockBSubmit);
document.getElementById('copy-featureBlockB-code').addEventListener('click', copyFeatureBlockBCode);

document.getElementById('express-briefing-form').addEventListener('submit', expressBriefingSubmit);
document.getElementById('copy-expressBriefing-code').addEventListener('click', copyExpressBriefingCode);

function iframeSubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('iframeheadline').value;
    var chatter = document.getElementById('iframechatter').value;
    var link = document.getElementById('iframelink').value.trim();
    var iFrameCode = document.getElementById('iframeiframe').value.trim();
    var iframe = iFrameCode.indexOf('<div') > -1 ? scrubDivFromIframe(iFrameCode) : iFrameCode;
    var exclusive = document.getElementById('iframe-exclusive').checked;

    var context = {
        storyLink: link,
        headline: headline,
        chatter: chatter,
        iframe: iframe,
        exclusive: exclusive
    };

    generateTemplateCode('iframe', context, 'div.iframe-code-container');
    displayCopyButton('#copy-iframe-code');
}

function storySubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('storyHeadline').value;
    var firstLetter = document.getElementById('storyChatter').value.substring(0, 1);
    var chatter = document.getElementById('storyChatter').value.substring(1);
    var link = document.getElementById('storyLink').value.trim();
    var image = document.getElementById('storyImage').value.trim();
    var exclusive = document.getElementById('storyExclusive').checked;
    var dropcap = document.getElementById('storyDropcap').checked;

    var context = {
        storyLink: link,
        headline: headline,
        firstLetter: firstLetter,
        chatter: chatter,
        image: image,
        exclusive: exclusive,
        dropcap: dropcap
    };

    generateTemplateCode('story', context, 'div.story-code-container');
    displayCopyButton('#copy-story-code');
}

function atfSubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('atfHeadline').value;
    var link = document.getElementById('atfLink').value.trim();
    var image = document.getElementById('atfImage').value.trim();
    var exclusive = document.getElementById('atfExclusive').checked;

    var context = {
        storyLink: link,
        headline: headline,
        image: image,
        exclusive: exclusive
    };

    generateTemplateCode('atf', context, 'div.atf-code-container');
    displayCopyButton('#copy-atf-code');
}

function sidebarSubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('sidebarHeadline').value;
    var chatter = document.getElementById('sidebarChatter').value;
    var link = document.getElementById('sidebarLink').value.trim();
    var image = document.getElementById('sidebarImage').value.trim();

    var context = {
        storyLink: link,
        image: image,
        headline: headline,
        chatter: chatter
    };

    generateTemplateCode('related-feature-sidebar', context, 'div.sidebar-code-container');
    displayCopyButton('#copy-sidebar-code');
}

function featureBlockSubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('featureBlockHeadline').value;
    var chatter = document.getElementById('featureBlockChatter').value;
    var link = document.getElementById('featureBlockLink').value.trim();
    var image = document.getElementById('featureBlockImage').value.trim();

    var context = {
        storyLink: link,
        image: image,
        headline: headline,
        chatter: chatter
    };

    generateTemplateCode('related-feature-block', context, 'div.featureBlock-code-container');
    displayCopyButton('#copy-featureBlock-code');
}
function featureBlockBSubmit(event) {
    event.preventDefault();
    var headline = document.getElementById('featureBlockBHeadline').value;
    var chatter = document.getElementById('featureBlockBChatter').value;
    var link = document.getElementById('featureBlockBLink').value.trim();
    var image = document.getElementById('featureBlockBImage').value.trim();

    var context = {
        storyLink: link,
        image: image,
        headline: headline,
        chatter: chatter
    };

    generateTemplateCode('related-feature-block-b', context, 'div.featureBlockB-code-container');
    displayCopyButton('#copy-featureBlockB-code');
}

function expressBriefingSubmit(event) {
    event.preventDefault();
    var chatter = document.getElementById('expressBriefingChatter').value;
    var file = document.getElementById('expressBriefingFile').value;

    var context = {
        chatter: chatter,
        file: file
    };

    generateTemplateCode('express-briefing', context, 'div.expressBriefing-code-container');
    displayCopyButton('#copy-expressBriefing-code');
}

function generateTemplateCode(handlebarsTemplate, context, selector) {
    var html = Handlebars.templates[handlebarsTemplate](context);
    var target = document.querySelector(selector);
    target.innerHTML = html;
}

function copyContentsOfSelector(selector) {
    var textArea = document.createElement('textarea');
    var stringWithoutXmp = clearXmpFromString(document.querySelector(selector).innerHTML);
    textArea.value = stringWithoutXmp;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    } catch (err) {
        console.log(err);
    }
}

function displayCopyButton(selector) {
    var button = document.querySelector(selector);
    button.style.display = 'block';
}

function copyiFrameCode() {
    return copyContentsOfSelector('div.iframe-code-container');
}

function copyStoryCode() {
    return copyContentsOfSelector('div.story-code-container');
}

function copyAtfCode() {
    return copyContentsOfSelector('div.atf-code-container');
}

function copySidebarCode() {
    return copyContentsOfSelector('div.sidebar-code-container');
}

function copyFeatureBlockCode() {
    return copyContentsOfSelector('div.featureBlock-code-container');
}

function copyFeatureBlockBCode() {
    return copyContentsOfSelector('div.featureBlockB-code-container');
}

function copyExpressBriefingCode() {
    return copyContentsOfSelector('div.expressBriefing-code-container')
}


function clearXmpFromString(string) {
    var open = '<xmp>';
    var close = '</xmp>';
    var openRE = new RegExp(open, 'g');
    var closeRE = new RegExp(close, 'g');

    return string.replace(openRE, '').replace(closeRE, '');
}

function scrubDivFromIframe(string) {
    var div = document.createElement('div');
    div.innerHTML = string;
    div.innerHTML = div.getElementsByTagName('div')[0].innerHTML;
    return div.innerHTML;
}

function generateExampleVueComponent(elementSelector) {
    return new Vue({
        el: elementSelector,
        data: {
            show: false
        },
        methods: {
            toggle: function (event) {
                this.show = !this.show;
            }
        }
    })
}
