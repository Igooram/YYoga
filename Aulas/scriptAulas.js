document.addEventListener('DOMContentLoaded', () => {
    const freeClasses = [
        {
            title: 'Yoga para Iniciantes - Aula 1',
            videoId: 'dQw4w9WgXcQ' // Substitua pelo ID real do vídeo do YouTube
        },
        {
            title: 'Meditação Guiada',
            videoId: 'dQw4w9WgXcQ' // Substitua pelo ID real do vídeo do YouTube
        },
        {
            title: 'Alongamento Básico',
            videoId: 'dQw4w9WgXcQ' // Substitua pelo ID real do vídeo do YouTube
        },
        {
            title: 'Yoga para Relaxamento',
            videoId: 'dQw4w9WgXcQ' // Substitua pelo ID real do vídeo do YouTube
        }
    ];

    const classes = [
        {
            name: 'Yoga para Iniciantes',
            description: 'Aprenda os fundamentos do yoga em um ambiente acolhedor.',
            duration: '60 minutos',
            level: 'Iniciante',
            image: 'path/to/beginner-yoga.jpg'
        },
        {
            name: 'Poder da Força Yoga',
            description: 'Intensifique sua prática com posturas desafiadoras.',
            duration: '75 minutos',
            level: 'Intermediário',
            image: 'path/to/power-yoga.jpg'
        },
        {
            name: 'Meditação Jedi',
            description: 'Encontre equilíbrio e paz interior através da meditação.',
            duration: '45 minutos',
            level: 'Todos os níveis',
            image: 'path/to/meditation.jpg'
        },
        {
            name: 'Yoga Fluído',
            description: 'Movimente-se com graça e fluidez nesta aula dinâmica.',
            duration: '90 minutos',
            level: 'Intermediário/Avançado',
            image: 'path/to/flow-yoga.jpg'
        },
        {
            name: 'Yoga Restaurativo',
            description: 'Relaxe e restaure seu corpo e mente com posturas suaves.',
            duration: '60 minutos',
            level: 'Todos os níveis',
            image: 'path/to/restorative-yoga.jpg'
        },
        {
            name: 'Yoga para Flexibilidade',
            description: 'Aumente sua flexibilidade e amplitude de movimento.',
            duration: '75 minutos',
            level: 'Todos os níveis',
            image: 'path/to/flexibility-yoga.jpg'
        },
        {
            name: 'Yoga para Força',
            description: 'Desenvolva força e resistência com posturas desafiadoras.',
            duration: '75 minutos',
            level: 'Intermediário',
            image: 'path/to/strength-yoga.jpg'
        },
        {
            name: 'Yoga Yin',
            description: 'Prática suave e passiva para aumentar a flexibilidade.',
            duration: '60 minutos',
            level: 'Todos os níveis',
            image: 'path/to/yin-yoga.jpg'
        }
    ];

    const videoGrid = document.querySelector('.video-grid');
    const classContainer = document.querySelector('.class-list');

    freeClasses.forEach(videoClass => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoClass.videoId}" frameborder="0" allowfullscreen></iframe>
            <h3>${videoClass.title}</h3>
        `;
        videoGrid.appendChild(videoItem);
    });

    classes.forEach(yogaClass => {
        const classItem = document.createElement('div');
        classItem.classList.add('class-item');
        classItem.innerHTML = `
            <div class="class-image" style="background-image: url(${yogaClass.image})"></div>
            <h3>${yogaClass.name}</h3>
            <p>${yogaClass.description}</p>
            <p><strong>Duração:</strong> ${yogaClass.duration}</p>
            <p><strong>Nível:</strong> ${yogaClass.level}</p>
            <button class="enroll-button">Inscrever-se</button>
        `;
        classContainer.appendChild(classItem);
    });
});