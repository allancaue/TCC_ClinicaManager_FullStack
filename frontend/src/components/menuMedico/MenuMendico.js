import { useEffect, useState } from 'react';
import style from './menuMedico.module.css';
import Exit from '../../assets/images/Exit.svg';
import { getNaTriagem, realizarTriagem } from '../../services/apiServices';
import GeralFinalizado from '../geralFinalizado/geralFinalizado';


function MenuMedico({isOpen, onClose}) {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const onReturn = () => {
        toggleModal();
        onClose();
    }

    return(
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>Menu Medico</h3>
                                <img src={Exit} onClick={onClose} alt="Fechar" />
                            </div>
                            <div className={style.meio}>
                                <div className={style.meioTitulo}>
                                    <h3>Imformacoes da Triagem</h3>
                                    <h3>Detalhes do Medico</h3>
                                </div>
                                <div className={style.meioImfo}>
                                    <textarea
                                        name="detalhesSintomas"
                                    />
                                    <textarea
                                        name="detalhesSintomas"
                                    />
                                </div>
                            </div>
                            <div className={style.baixo}>
                                <div className={style.conteiner3}>
                                    <button className={style.cancelar} onClick={onClose}>Cancelar</button>
                                    <button className={style.comfirmar} onClick={toggleModal}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <GeralFinalizado isOpen={modalOpen} onClose={toggleModal} onReturn={onReturn} tesxt={'O paciente já foi atendido'} titulo={'Atendimeto concluído'} botao={'Chamar outro paciente para o atendimento'} />
        </>
    );
}

export default MenuMedico;