import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { backendDev, frontendDev, devOps, softwareArchitecture, networkingSecurity, softwareTestingQA } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: backendDev,
    name: 'Backend Development'
  },
  {
    icon: frontendDev,
    name: 'Frontend Development'
  },
  {
    icon: devOps,
    name: 'DevOps'
  },
  {
    icon: softwareArchitecture,
    name: 'Software Architecture'
  },
  {
    icon: networkingSecurity,
    name: 'Networking & Security'
  },
  {
    icon: softwareTestingQA,
    name: 'Software Testing & QA'
  },
]

export default expertiseAreaData
