<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Papper Scissor</title>
</head>
<body>
    <div class="container">
        <h3>Rock Papper Scissor</h3>
        <div>
            <button onclick="play('Rock')">Rock</button>
            <button onclick="play('Papper')">Papper</button>
            <button onclick="play('Scissor')">Scissor</button>
        </div>
        <p id="game-result">-</p>
        <table>
            <tr>
                <td>You</td>
                <td>Computer</td>
            </tr>
            <tr>
                <td><p id="user-choice">-</p></td>
                <td><p id="computer-choice">-</p></td>
            </tr>
        </table>
        <table>
            <tr>
                <td class="count">Wins : 0</td>
                <td class="count">Losses : 0</td>
                <td class="count">Ties : 0</td>
            </tr>
        </table>
        <button onclick="reset()">Reset</button>
        <script>

            const user_choice = document.getElementById('user-choice')
            const computer_choice = document.getElementById('computer-choice')
            const game_result = document.getElementById('game-result')
            const count = document.getElementsByClassName('count')
            let wins = 0, losses = 0, ties = 0
            let matches = 0

            function play(user_cho) {
                matches++
                let comp_cho = getRandom()
                user_choice.innerHTML = user_cho
                computer_choice.innerHTML = comp_cho

                if(user_cho === 'Rock'){
                    if(comp_cho === 'Scissor'){
                        console.log('User wins')
                        game_result.innerHTML = 'You win'
                        wins++
                    }
                    else if(comp_cho === 'Papper'){
                        console.log('User loss')
                        game_result.innerHTML = 'You loss'
                        losses++
                    }
                    else {
                        console.log('Game is Tie')
                        game_result.innerHTML = 'Game is Tie'
                        ties++
                    }
                }
                else if(user_cho === 'Papper'){
                    if(comp_cho === 'Rock'){
                        console.log('User wins')
                        game_result.innerHTML = 'You win'
                        wins++
                    }
                    else if(comp_cho === 'Scissor'){
                        console.log('User loss')
                        game_result.innerHTML = 'You loss'
                        losses++
                    }
                    else {
                        console.log('Game is Tie')
                        game_result.innerHTML = 'Game is Tie'
                        ties++
                    }
                }
                else {
                    if(comp_cho === 'Papper'){
                        console.log('User wins')
                        game_result.innerHTML = 'You win'
                        wins++
                    }
                    else if(comp_cho === 'Rock'){
                        console.log('User loss')
                        game_result.innerHTML = 'You loss'
                        losses++
                    }
                    else {
                        console.log('Game is Tie')
                        game_result.innerHTML = 'Game is Tie'
                        ties++
                    }
                }
                count[0].innerHTML = Wins : ${wins}
                count[1].innerHTML = Losses : ${losses}
                count[2].innerHTML = Ties : ${ties}

                if(matches === 5){
                    if(wins > losses){
                        alert('You win')
                    }
                    else if(losses > wins){
                        alert('You loss')
                    }
                    else {
                        alert('game is tie')
                    }
                    reset()
                }
            }

            function reset() {
                wins = 0
                losses = 0
                ties = 0
                matches = 0
                
                count[0].innerHTML = Wins : ${wins}
                count[1].innerHTML = Losses : ${losses}
                count[2].innerHTML = Ties : ${ties}

                game_result.innerHTML = '-'
                user_choice.innerHTML = '-'
                computer_choice.innerHTML = '-'
                alert('Game reseted successfully')
            }

            function getRandom(){
                let n = Math.round(Math.random()*2)
                return (n === 0) ? 'Rock' : ((n === 1) ? 'Papper' : 'Scissor')
            }
        </script>
    </div>
</body>
</html>