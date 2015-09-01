var Term = {
    toggleTerm : function(player){
        debugger;
        var term = $("#term");
        if (term.length){
            term.remove();  //maybe later keep state
            player.getMap().getEngine().unlock();
        } else {
            //debugger;
            if (!player.getMap().getEngine()._lock){
                player.getMap().getEngine().lock();
            }
            var termDiv = document.createElement('div');
            termDiv.id = 'term';
            document.body.appendChild(termDiv);
            $(termDiv).terminal(function(command, terminal) {
                terminal.echo('you type command "' + command + '"');

            }, {
                greetings: 'UNIX V6.1 beta',
                name: 'js_demo',
                prompt: '$ '
            });
        }
        return true;
    }

};