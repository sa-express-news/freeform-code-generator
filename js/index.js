    document.getElementById('iframe-form').addEventListener('submit', iframeSubmit);
    document.getElementById('copy-iframe-code').addEventListener('click', copyiFrameCode);

    document.getElementById('story-form').addEventListener('submit', storySubmit);
    document.getElementById('copy-story-code').addEventListener('click', copyStoryCode);

    document.getElementById('atf-form').addEventListener('submit', atfSubmit);
    document.getElementById('copy-atf-code').addEventListener('click', copyAtfCode);

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

        generateiFrameCode(context);
        showCopyButton();

        function showCopyButton() {
            var button = document.getElementById('copy-iframe-code');
            button.style.display = 'block';
        }

        function generateiFrameCode(context) {
            var html = Handlebars.templates.iframe(context);
            var div = document.getElementsByClassName('iframe-code-container')[0];
            div.innerHTML = html;
        }


    }

    function storySubmit(event) {
        event.preventDefault();
        var headline = document.getElementById('storyHeadline').value;
        var firstLetter = document.getElementById('storyChatter').value.substring(0, 1);
        var chatter = document.getElementById('storyChatter').value.substring(1);
        var link = document.getElementById('storyLink').value.trim();
        var image = document.getElementById('storyImage').value.trim();
        var exclusive = document.getElementById('storyExclusive').checked;

        var context = {
            storyLink: link,
            headline: headline,
            firstLetter: firstLetter,
            chatter: chatter,
            image: image,
            exclusive: exclusive
        };

        generateStoryCode(context);
        showCopyButton();

        function showCopyButton() {
            var button = document.getElementById('copy-story-code');
            button.style.display = 'block';
        }

        function generateStoryCode(context) {
            var html = Handlebars.templates.story(context);
            var div = document.getElementsByClassName('story-code-container')[0];
            div.innerHTML = html;
        }

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

        generateAtfCode(context);
        showCopyButton();

        function showCopyButton() {
            var button = document.getElementById('copy-atf-code');
            button.style.display = 'block';
        }

        function generateAtfCode(context) {
            var html = Handlebars.templates.atf(context);
            var div = document.getElementsByClassName('atf-code-container')[0];
            div.innerHTML = html;
        }

    }

    function copyiFrameCode() {
        var textArea = document.createElement('textarea');
        var stringWithoutXmp = clearXmpFromString(document.getElementsByClassName('iframe-code-container')[0].innerHTML);
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

    function copyStoryCode() {
        var textArea = document.createElement('textarea');
        var stringWithoutXmp = clearXmpFromString(document.getElementsByClassName('story-code-container')[0].innerHTML);
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

    function copyAtfCode() {
        var textArea = document.createElement('textarea');
        var stringWithoutXmp = clearXmpFromString(document.getElementsByClassName('atf-code-container')[0].innerHTML);
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