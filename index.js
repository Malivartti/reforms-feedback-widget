(function(){
    const initCode = function () {
        function closeWidget(event) {
            event.stopPropagation()
            const widget = document.querySelector('.container');
            if (widget.classList.contains('open')) {
                widget.classList.remove('open');
            }
        }
        
        function openWidget(event) {
            const widget = document.querySelector('.container');
            if (!widget.classList.contains('open')) {
                widget.classList.add('open');
            }
        }
        
        function scrollDown() {
            setTimeout(() => {
                const body = document.querySelector('.body');
                body.scrollTop = body.scrollHeight;
            })
        }
        
        function createMessageEl(value) {
            const messageEl = document.createElement('div');
            messageEl.classList.add('message', 'message_user');
            messageEl.textContent = value;
            return messageEl;
        }
        
        function sendMessage(event) {
            event.preventDefault();
        
            const inputField = document.querySelector('.input__field');
            const messageValue = inputField.value;
            if (messageValue.trim()) {
               const messageEl = createMessageEl(messageValue);
                const chat = document.querySelector('.chat');
                chat.append(messageEl);
                scrollDown();
            }
            event.target.reset();
        }
        
        function sendClue(event) {
            const messageEl = createMessageEl(event.target.textContent);
            const chat = document.querySelector('.chat');
            chat.append(messageEl);
            scrollDown();
            event.target.parentNode.removeChild(event.target);
        }

        const closeWidgetBtn = document.querySelector('.header__close');
        closeWidgetBtn.addEventListener('click', closeWidget);
    
        const openWidgetBtn = document.querySelector('.header');
        openWidgetBtn.addEventListener('click', openWidget);
    
        const inputForm = document.querySelector('.input');
        inputForm.addEventListener('submit', sendMessage);
    
        const clues = document.querySelector('.clues');
        clues.addEventListener('click', sendClue)
        };

    document.readyState === 'complete' ?
        initCode() :
        window.addEventListener('load', initCode, false);
})();