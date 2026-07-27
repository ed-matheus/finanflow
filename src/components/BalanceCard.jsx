const BalanceCard = () => {
  return (
    <div className="rounded-2xl p-5 w-full bg-gray-900 text-white">
      <h3 className="font-medium mb-2">Saldo disponível</h3>

      {/* Saldo atual */}
      <span className="font-medium text-4xl">R$ 612,45</span>

      {/* Entradas e Saídas */}
      <div className="flex justify-between mt-5 font-medium">

        {/* Entradas */}
        <div className="flex flex-col">
          <span className="text-green-400">Entradas</span>
          <span>R$ 1.450,00</span>
        </div>

        <hr className="text-red-500" />

        {/* Saídas */}
        <div className="flex flex-col">
          <span className="text-red-400">Saídas</span>
          <span>R$ 837,55</span>
        </div>

        {/* Restante */}
        <div className="flex flex-col">
          <span className="text-gray-300">Restante do mês</span>
          <span>R$ 612,45</span>
        </div>
      </div>

    </div>
  )
}

export default BalanceCard