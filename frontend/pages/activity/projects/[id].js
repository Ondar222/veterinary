import { PageName } from "../../../components/PageName/PageName"
import { ProjectPages } from "../../../components/Project/Project"
import ActivityPageLayout from "../../../layouts/ActivityPageLayout"
import MainPageLayout from "../../../layouts/MainPageLayout"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/projects/${id}?populate=*`)
  const project = await res.json()

  return {
    props: { project: project.data },
  }
}

const ProjectPage = ({ project }) =>
  <MainPageLayout>
    <PageName title={project.title} />
    <ActivityPageLayout>
      <ProjectPages
        description={project.description}
        title={project.title}
        documentURL={project.documentation.url} />
    </ActivityPageLayout>
  </MainPageLayout>

export default ProjectPage