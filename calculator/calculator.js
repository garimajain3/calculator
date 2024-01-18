let display = ''
        function num(value){
            display += value
            updateDisplay()

        }
        function clearDisplay(){
            display ='';
            updateDisplay()
        }

        function operation(operator){
            display += operator
            updateDisplay()
            
        }

        function result(){
            const ans = eval(display)
            display = ans.toString()
            updateDisplay()

        }

        function updateDisplay(){
            document.getElementById("res").value = display
            console.log(document.getElementById("res").value)
        }