import React from "react";

type ResumeCardProps = {
  Icon: React.ElementType;
  role: string;
  date: string;
  description: string;
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  Icon,
  role,
  date,
  description,
}) => {
  return (
    <div className="flex gap-4 p-6 border border-slate-700 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
      {/* Icon */}
      <div className="text-cyan-400 flex-shrink-0">
        <Icon size={28} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="text-sm text-cyan-300">{date}</p>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;