export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Cras rhoncus aliquam gravida. Nulla faucibus vestibulum convallis. Etiam ultricies sagittis felis, quis luctus neque. Mauris gravida libero sit amet est ornare scelerisque. Duis fringilla ipsum a tempus vulputate.',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Cras rhoncus aliquam gravida. Nulla faucibus vestibulum convallis. Etiam ultricies sagittis felis, quis luctus neque. Mauris gravida libero sit amet est ornare scelerisque. Duis fringilla ipsum a tempus vulputate.',
            picture: null
        },
        {
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text: 'Cras rhoncus aliquam gravida. Nulla faucibus vestibulum convallis. Etiam ultricies sagittis felis, quis luctus neque. Mauris gravida libero sit amet est ornare scelerisque. Duis fringilla ipsum a tempus vulputate.',
            picture: null
        },
    ]
})