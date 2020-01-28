import AnimesPage from './page/[page]'

const page = (props: any) => <AnimesPage {...props} page={1} />

page.getInitialProps = (props: { query: { search?: string } }) => {
    return { search: props.query.search };
}

export default page;