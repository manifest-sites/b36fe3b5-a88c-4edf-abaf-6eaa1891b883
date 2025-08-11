import { useState } from 'react'
import { Button, Card, Typography } from 'antd'

const { Title, Text } = Typography

function DinosaurCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      let result

      switch (operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '*':
          result = currentValue * inputValue
          break
        case '/':
          result = currentValue / inputValue
          break
        case '=':
          result = inputValue
          break
        default:
          return
      }

      setDisplay(String(result))
      setPreviousValue(result)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = () => {
    performOperation('=')
    setOperation(null)
    setPreviousValue(null)
    setWaitingForOperand(true)
  }

  const DinosaurButton = ({ children, onClick, className = "", type = "default", size = "large" }) => (
    <Button
      onClick={onClick}
      type={type}
      size={size}
      className={`h-16 text-lg font-bold transition-all duration-200 hover:scale-105 shadow-lg ${className}`}
    >
      {children}
    </Button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="text-center mb-6">
          <Title level={1} className="text-green-800 mb-2">
            🦕 Dino Calculator 🦖
          </Title>
          <Text className="text-green-600 text-lg">
            Prehistoric calculations made fun!
          </Text>
        </div>

        <Card className="bg-amber-50 border-4 border-green-500 shadow-2xl rounded-3xl">
          <div className="mb-6">
            <div className="bg-black text-green-400 p-4 rounded-xl text-right text-3xl font-mono min-h-[60px] flex items-center justify-end border-4 border-amber-400">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <DinosaurButton
              onClick={clear}
              type="primary"
              className="col-span-2 bg-red-500 hover:bg-red-600 border-red-600"
            >
              🦴 Clear
            </DinosaurButton>
            <DinosaurButton
              onClick={() => performOperation('/')}
              className="bg-orange-400 hover:bg-orange-500 text-white border-orange-500"
            >
              ÷
            </DinosaurButton>
            <DinosaurButton
              onClick={() => performOperation('*')}
              className="bg-orange-400 hover:bg-orange-500 text-white border-orange-500"
            >
              ×
            </DinosaurButton>

            <DinosaurButton onClick={() => inputNumber(7)} className="bg-green-200 hover:bg-green-300 border-green-400">
              7️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(8)} className="bg-green-200 hover:bg-green-300 border-green-400">
              8️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(9)} className="bg-green-200 hover:bg-green-300 border-green-400">
              9️⃣
            </DinosaurButton>
            <DinosaurButton
              onClick={() => performOperation('-')}
              className="bg-orange-400 hover:bg-orange-500 text-white border-orange-500"
            >
              ➖
            </DinosaurButton>

            <DinosaurButton onClick={() => inputNumber(4)} className="bg-green-200 hover:bg-green-300 border-green-400">
              4️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(5)} className="bg-green-200 hover:bg-green-300 border-green-400">
              5️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(6)} className="bg-green-200 hover:bg-green-300 border-green-400">
              6️⃣
            </DinosaurButton>
            <DinosaurButton
              onClick={() => performOperation('+')}
              className="bg-orange-400 hover:bg-orange-500 text-white border-orange-500"
            >
              ➕
            </DinosaurButton>

            <DinosaurButton onClick={() => inputNumber(1)} className="bg-green-200 hover:bg-green-300 border-green-400">
              1️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(2)} className="bg-green-200 hover:bg-green-300 border-green-400">
              2️⃣
            </DinosaurButton>
            <DinosaurButton onClick={() => inputNumber(3)} className="bg-green-200 hover:bg-green-300 border-green-400">
              3️⃣
            </DinosaurButton>
            <DinosaurButton
              onClick={calculate}
              type="primary"
              className="row-span-2 bg-emerald-500 hover:bg-emerald-600 border-emerald-600 h-auto"
            >
              🦕 =
            </DinosaurButton>

            <DinosaurButton
              onClick={() => inputNumber(0)}
              className="col-span-2 bg-green-200 hover:bg-green-300 border-green-400"
            >
              0️⃣
            </DinosaurButton>
            <DinosaurButton onClick={inputDecimal} className="bg-green-200 hover:bg-green-300 border-green-400">
              🥚 .
            </DinosaurButton>
          </div>

          <div className="mt-6 text-center">
            <Text className="text-green-700 text-sm">
              🌿 Powered by prehistoric mathematics! 🌿
            </Text>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DinosaurCalculator