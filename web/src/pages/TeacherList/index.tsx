import React from 'react';
import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';

function TeacherList() {
    return (
        <header id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Português", label: "Português" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Geografia", label: "Geografia" },
                        ]}
                    />

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda" },
                            { value: "2", label: "Terça" },
                            { value: "3", label: "Quarta" },
                            { value: "4", label: "Quinta" },
                            { value: "5", label: "Sexta" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />

                    <Input type="time" name="time" label="Horário" />

                </form>

            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </header>
    )
}

export default TeacherList;
