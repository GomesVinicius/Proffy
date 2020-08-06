import React, { useState, FormEvent } from 'react';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([])
    async function searchTeacher(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data)
    }

    return (
        <header id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeacher}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: "Português", label: "Português" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Geografia", label: "Geografia" },
                        ]}
                    />

                    <Select
                        name="subject"
                        label="Matéria"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
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

                    <Input
                        type="time"
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>

            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    )
                })}
            </main>

        </header>
    )
}

export default TeacherList;
