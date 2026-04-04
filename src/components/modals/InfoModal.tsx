import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Come si gioca" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Un tempo gli umani combattevano i mostri, ma presto scoprirono che è
        meglio ingraziarseli. Per farti amico un mostro devi indovinare la sua
        parola preferita. Grazie pietroppeter!
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Indovina la parola in 6 mosse. Dopo ogni tentativo, il colore delle
        celle cambierà per mostrare quanto ti sei avvicinato alla parola giusta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="O" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera B è nella parola e nel posto giusto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="present"
        />
        <Cell value="N" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera O è nella parola ma nel posto sbagliato.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="S" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="L" status="absent" />
        <Cell value="I" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera L non è nella parola in alcuna posizione.
      </p>
    </BaseModal>
  )
}
