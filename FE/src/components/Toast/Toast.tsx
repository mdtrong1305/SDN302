import React from 'react';
import { toast as hotToast, Toaster, ToastIcon } from 'react-hot-toast';

// Re-export the main toast trigger function for convenience
export const toast = hotToast;

// Export a custom-styled ToastContainer wrapping the library's Toaster
export const ToastContainer: React.FC = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                success: {
                    iconTheme: {
                        primary: '#8b5cf6', // Violet icon for success
                        secondary: '#ffffff',
                    }
                },
                error: {
                    iconTheme: {
                        primary: '#ec4899', // Pink icon for error
                        secondary: '#ffffff',
                    }
                }
            }}
        >
            {(t) => (
                <div
                    className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 w-full max-w-sm pointer-events-auto ${
                        t.visible ? 'toast-enter' : 'toast-exit'
                    } ${
                        t.type === 'success'
                            ? 'bg-purple-50/98 border-purple-300/50 text-purple-950 shadow-purple-500/10'
                            : t.type === 'error'
                            ? 'bg-pink-50/98 border-pink-300/50 text-pink-950 shadow-pink-500/10'
                            : 'bg-violet-50/98 border-violet-300/50 text-violet-950 shadow-violet-500/10'
                    }`}
                >
                    <span className="flex-shrink-0 flex items-center justify-center">
                        <ToastIcon toast={t} />
                    </span>
                    
                    <p className="text-base font-semibold flex-1 leading-snug">
                        {typeof t.message === 'function' ? t.message(t) : t.message}
                    </p>
                    
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="text-violet-950/40 hover:text-violet-950 transition-colors ml-1 p-0.5 rounded-lg hover:bg-violet-500/10"
                    >
                        ✕
                    </button>
                </div>
            )}
        </Toaster>
    );
};
