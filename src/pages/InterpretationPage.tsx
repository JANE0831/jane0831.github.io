import { useLanguage } from "../contexts/language-context";

export function InterpretationPage() {
  const { t } = useLanguage();

  return (
    <div className="flex mt-40">
      <main className="flex-1 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-100 mb-8">
            {t("interpretation")}
          </h1>
          <div className="text-gray-300">
            <p className="mb-4">
              This is the interpretation page. Content will be added here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
