import React from 'react'
import { LucideIcon } from 'lucide-react'

type Props = {
  role: string
  Icon: LucideIcon
  date?: string
}

const ResumeCard = ({ Icon, role, date }: Props) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 bg-blue-950/20 transition-all duration-300 p-4 sm:p-6 rounded-3xl sm:flex-row sm:items-start">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-950 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="flex-1 space-y-3">
          {date && (
            <div>
              <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-600 sm:text-base">
                {date}
              </span>
            </div>
          )}
          <h1 className="text-white text-base sm:text-lg font-semibold">
            {role}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto minima numquam fugiat rerum iure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
