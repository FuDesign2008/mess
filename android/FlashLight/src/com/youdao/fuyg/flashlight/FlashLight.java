package com.youdao.fuyg.flashlight;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;

public class FlashLight extends Activity {
    private static final String TAG = "FlashLight";
    Button mBtnFlashLight;
    LinearLayout mLayoutFlash;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        Log.v(TAG, "Inside Activity");
        mBtnFlashLight = (Button) findViewById(R.id.btnSwitch);
        mLayoutFlash = (LinearLayout) findViewById(R.id.flash_layout);

        mBtnFlashLight.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                String flashStatus = mBtnFlashLight.getText().toString();
                if (flashStatus.equals("FLASH ON")) {
                    Log.v(TAG, "flash on");
                    mBtnFlashLight.setText("FLASH OFF");
                    WindowManager.LayoutParams lp = getWindow().getAttributes();
                    Float prevScreenBright = lp.screenBrightness;
                    Log.v(TAG, "Screen Brightness Prev: " + prevScreenBright.toString());

                    lp.screenBrightness += 10.0f;

                    getWindow().setAttributes(lp);
                    WindowManager.LayoutParams lpAfter = getWindow().getAttributes();
                    Float afterScreenBright = lpAfter.screenBrightness;
                    Log.v(TAG, "Screen Brightness After: " + afterScreenBright.toString());
                    mLayoutFlash.setBackgroundResource(R.color.all_white);
                } else if (flashStatus.equals("FLASH OFF")) {
                    Log.v(TAG, "flash off");
                    mBtnFlashLight.setText("FLASH ON");
                    mLayoutFlash.setBackgroundResource(R.color.all_black);
                }

            }
        });
    }

    //@Override
    //public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        //getMenuInflater().inflate(R.menu.flash_light, menu);
        //return true;
    //}
}
