class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html('Car Racing Game')
        title.position(130,0)

        var input = createInput("h2")
        input.position(130,160)

        var greetings = createElement("h3")

        var button = createButton('PLAY')
        button.position(250,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name = input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)

            greetings.html('WELCOME '+name)
            greetings.position(130,160)
        })
        
        
    }
}