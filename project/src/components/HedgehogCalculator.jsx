import { useState } from 'react'
import { Button, Card, Typography } from 'antd'

const { Title, Text } = Typography

function HedgehogCalculator() {
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

  const HedgehogButton = ({ children, onClick, className = "", type = "default", size = "large" }) => (
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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="text-center mb-6">
          <Title level={1} className="text-amber-800 mb-2">
            🦔 Hedgehog Calculator 🦔
          </Title>
          <Text className="text-amber-700 text-lg">
            Spiky calculations made cozy!
          </Text>
        </div>

        <Card className="bg-orange-50 border-4 border-amber-600 shadow-2xl rounded-3xl">
          <div className="mb-6">
            <div className="bg-amber-900 text-orange-300 p-4 rounded-xl text-right text-3xl font-mono min-h-[60px] flex items-center justify-end border-4 border-orange-400">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <HedgehogButton
              onClick={clear}
              type="primary"
              className="col-span-2 bg-red-500 hover:bg-red-600 border-red-600"
            >
              🍄 Clear
            </HedgehogButton>
            <HedgehogButton
              onClick={() => performOperation('/')}
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-700"
            >
              ÷
            </HedgehogButton>
            <HedgehogButton
              onClick={() => performOperation('*')}
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-700"
            >
              ×
            </HedgehogButton>

            <HedgehogButton onClick={() => inputNumber(7)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              7️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(8)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              8️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(9)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              9️⃣
            </HedgehogButton>
            <HedgehogButton
              onClick={() => performOperation('-')}
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-700"
            >
              ➖
            </HedgehogButton>

            <HedgehogButton onClick={() => inputNumber(4)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              4️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(5)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              5️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(6)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              6️⃣
            </HedgehogButton>
            <HedgehogButton
              onClick={() => performOperation('+')}
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-700"
            >
              ➕
            </HedgehogButton>

            <HedgehogButton onClick={() => inputNumber(1)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              1️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(2)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              2️⃣
            </HedgehogButton>
            <HedgehogButton onClick={() => inputNumber(3)} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              3️⃣
            </HedgehogButton>
            <HedgehogButton
              onClick={calculate}
              type="primary"
              className="row-span-2 bg-amber-700 hover:bg-amber-800 border-amber-800 h-auto"
            >
              🦔 =
            </HedgehogButton>

            <HedgehogButton
              onClick={() => inputNumber(0)}
              className="col-span-2 bg-amber-200 hover:bg-amber-300 border-amber-400"
            >
              0️⃣
            </HedgehogButton>
            <HedgehogButton onClick={inputDecimal} className="bg-amber-200 hover:bg-amber-300 border-amber-400">
              🌰 .
            </HedgehogButton>
          </div>

          <div className="mt-6 text-center">
            <Text className="text-amber-800 text-sm">
              🍂 Powered by cozy woodland math! 🍂
            </Text>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HedgehogCalculator