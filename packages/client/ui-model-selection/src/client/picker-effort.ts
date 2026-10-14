/**
 * The effort the picker treats as chosen when the session named none.
 *
 * Prefers the adapter's `defaultEffort`, then `high`, then the first non-off
 * level. `undefined` means the model has no selectable ladder — the surface
 * then offers no effort control at all.
 *
 * This is a picker concern only: it is not published as `defaultEffort`, so
 * dispatch and auxiliary calls that name no effort keep today's behaviour.
 */
export function pickerDefaultEffort(
  reasoning: { defaultEffort?: string; efforts: readonly { id: string }[] } | undefined,
): string | undefined {
  if (reasoning === undefined) return undefined
  if (reasoning.defaultEffort !== undefined) return reasoning.defaultEffort
  return reasoning.efforts.find(level => level.id === 'high')?.id
    ?? reasoning.efforts.find(level => level.id !== 'off')?.id
}
