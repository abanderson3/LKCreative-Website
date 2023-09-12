import { FC } from "react";

interface SimpleListProps {
  listOptions: Array<string>,
  surveyData: {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    whoAreYou: string,
    currentSocials: Array<string>,
    toWorkOnSocials: Array<string>,
    budget: string,
    services: Object,
    targetAudience: Object,
    rawContent: Object,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  // handleSelect: () => void
}

// need to add handleSelect prop

const SimpleList: FC<SimpleListProps> = ({listOptions, surveyData, setSurveyData}) => {


  return (
    <>
      <ul className="font-josefine font-light flex flex-wrap justify-center">
        {listOptions.map((option, i) => (
          <li className="border border-black m-1 p-1 w-11/12 max-w-sm rounded-lg" key={i}>
            {option}
          </li>
        ))}
      </ul>
    </>
  )

}

export default SimpleList