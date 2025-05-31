import React from 'react'
import { statusIcons, StatusTypes } from './statusBox'

type StatusAlertPropsType = {
  status: keyof typeof statusAlertBoxes;
  text: string
}

const statusAlertBoxes: Record<StatusTypes, string> = {
  warning: "bg-[var(--accent-surface-warning-bg)] text-[var(--accent-surface-warning-fg)] border border-[var(--accent-surface-warning-border)]",
  error: "bg-[var(--accent-surface-error-bg)] text-[var(--accent-surface-error-fg)] border border-[var(--accent-surface-error-border)]",
  success: "bg-[var(--accent-surface-success-bg)] text-[var(--accent-surface-success-fg)] border border-[var(--accent-surface-success-border)]",
  info: "bg-[var(--accent-surface-info-bg)] text-[var(--accent-surface-info-fg)] border border-[var(--accent-surface-info-border)]",
  neutral: "bg-[var(--accent-surface-neutral-bg)] text-[var(--accent-surface-neutral-fg)] border border-[var(--accent-surface-neutral-border)]",
}

export const StatusAlert = ({
  status,
  text = "Undefined Status"
}: StatusAlertPropsType) => {
  const StatusIcon = status ? statusIcons[status] : statusIcons.neutral
  return (
    <div className={`${status ? statusAlertBoxes[status] : statusAlertBoxes.neutral} flex justify-center py-2 w-full items-center rounded-tiny gap-2`}>
      <StatusIcon width={8} height={8} />
      <span className='text-read_3 font-medium'>
      {text}
      </span>
    </div>
  )
}
