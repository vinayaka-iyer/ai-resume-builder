import useDebounce from "@/hooks/useDebounce";
import { ResumeValues } from "@/lib/validation";
import { useEffect, useState } from "react";

export default function useAutoSaveResume(resumeData: ResumeValues) {
  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(resumeData),
  );
  const [isSaving, setIsSaving] = useState(false);

  // trigger auto-save only when last saved data is different from current data
  useEffect(() => {
    async function save() {
      setIsSaving(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLastSavedData(structuredClone(debouncedResumeData));
      setIsSaving(false);
    }

    // call save only if we have unsaved changes
    const hasUnsavedChanges =
      JSON.stringify(debouncedResumeData) !== JSON.stringify(lastSavedData);
    if (hasUnsavedChanges && debouncedResumeData && !isSaving) {
      save();
    }
  }, [debouncedResumeData, isSaving, lastSavedData]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeData) !== JSON.stringify(lastSavedData),
  };
}
